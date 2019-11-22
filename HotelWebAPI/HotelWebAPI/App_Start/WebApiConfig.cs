using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HotelWebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Enable CORS
            
            // Web API yapılandırması ve hizmetleri
            var cors = new EnableCorsAttribute("*", "*", "*"); // origins, headers, methods
            config.EnableCors(cors);
            // Web API yolları
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
