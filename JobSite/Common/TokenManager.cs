using JobSite.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace JobSite.Common
{
    public interface ITokenManager
    {
        AuthToken Generate(ApplicationUser user);
    }

    public class TokenManager : ITokenManager
    {
        public AuthToken Generate(ApplicationUser user)
        {
            List<Claim> claims = new List<Claim>() {
            new Claim (JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim (JwtRegisteredClaimNames.Email, user.Email),
            new Claim (JwtRegisteredClaimNames.Sub, user.Id.ToString())
            };

            JwtSecurityToken token = new TokenBuilder()
                .AddAudience(TokenConstants.Audience)
                .AddIssuer(TokenConstants.Issuer)
                .AddExpiry(TokenConstants.ExpiryInMinutes)
                .AddKey(TokenConstants.key)
                .AddClaims(claims)
                .Build();

            string accessToken = new JwtSecurityTokenHandler()
                .WriteToken(token);

            return new AuthToken()
            {
                AccessToken = accessToken,
                ExpiresIn = TokenConstants.ExpiryInMinutes
            };
        }
    }

    public class TokenConstants
    {
        public static string Issuer = "thisismeyouknow";
        public static string Audience = "thisismeyouknow";
        public static int ExpiryInMinutes = 10;
        public static string key = "thiskeyisverylargetobreak";
    }
    public class TokenBuilder
    {
        private string _issuer;
        private string _audience;
        private DateTime _expires;
        private SigningCredentials _credentials;
        private SymmetricSecurityKey _key;
        private List<Claim> _claims;

        public TokenBuilder AddClaims(List<Claim> claims)
        {
            if (_claims == null)
                _claims = claims;
            else
                _claims.AddRange(claims);
            return this;
        }

        public TokenBuilder AddClaim(Claim claim)
        {
            if (_claims == null)
                _claims = new List<Claim>() { claim };
            else
                _claims.Add(claim);
            return this;
        }

        public TokenBuilder AddIssuer(string issuer)
        {
            _issuer = issuer;
            return this;
        }

        public TokenBuilder AddAudience(string audience)
        {
            _audience = audience;
            return this;
        }

        public TokenBuilder AddExpiry(int minutes)
        {
            _expires = DateTime.Now.AddMinutes(minutes);
            return this;
        }

        public TokenBuilder AddKey(string key)
        {
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            _credentials = new SigningCredentials(_key,
            SecurityAlgorithms.HmacSha256);
            return this;
        }

        public JwtSecurityToken Build()
        {
            return new JwtSecurityToken(
                issuer: _issuer,
                audience: _audience,
                claims: _claims,
                expires: _expires,
                signingCredentials: _credentials
            );
        }
    }

}
