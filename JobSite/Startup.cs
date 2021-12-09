using AspNetCore.Identity.Mongo;
using JobSite.Identity;
using JobSite.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using JobSite.Common;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using MongoDB.Bson;
using System;

namespace JobSite
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            var mongoDbSettings = Configuration.GetSection(nameof(JobSiteDatabaseSettings)).Get<JobSiteDatabaseSettings>();

            services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddMongoDbStores<ApplicationUser, ApplicationRole, string>
                (mongoDbSettings.ConnectionString, mongoDbSettings.DatabaseName);

            services.AddBearerAuthentication();

            services.Configure<JobSiteDatabaseSettings>(
                Configuration.GetSection(nameof(JobSiteDatabaseSettings)));

            services.AddSingleton<IJobSiteDatabaseSettings>(sp => sp.GetRequiredService<IOptions<JobSiteDatabaseSettings>>().Value);

            services.AddSingleton<JobSiteService>();
            services.AddSingleton<CandidateService>();
            services.AddSingleton<CompanyService>();
            services.AddSingleton<JobService>();
            services.AddSingleton<ITokenManager, TokenManager>();

            services.AddControllersWithViews();
            services.AddMvc(option =>
            {
                option.EnableEndpointRouting = false;
                var policy = new AuthorizationPolicyBuilder()
                                .RequireAuthenticatedUser().RequireAuthenticatedUser().Build();
                option.Filters.Add(new AuthorizeFilter(policy));
            }).SetCompatibilityVersion(CompatibilityVersion.Latest);
            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "clientapp";

                //if (env.IsDevelopment())
                //{
                //    spa.UseReactDevelopmentServer(npmScript: "start");
                //}
            });
        }

    }

    public static class AuthorizationExtension
    {
        // Extension method for Adding 
        // JwtBearer Middleware to the Pipeline
        public static IServiceCollection AddBearerAuthentication(
            this IServiceCollection services)
        {
            var validationParams = new TokenValidationParameters()
            {
                ValidateAudience = true,
                ValidateIssuer = true,
                ValidateLifetime = true,
                IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(TokenConstants.key)),
                ValidIssuer = TokenConstants.Issuer,
                ValidAudience = TokenConstants.Audience
            };

            var events = new JwtBearerEvents()
            {
                // invoked when the token validation fails
                OnAuthenticationFailed = (context) =>
                {
                    return Task.CompletedTask;
                },

                // invoked when a request is received
                OnMessageReceived = (context) =>
                {
                    return Task.CompletedTask;
                },

                // invoked when token is validated
                OnTokenValidated = (context) =>
                {
                    return Task.CompletedTask;
                }
            };

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme
                    = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme
                    = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = validationParams;
                options.Events = events;
            });

            return services;
        }
    }

}
