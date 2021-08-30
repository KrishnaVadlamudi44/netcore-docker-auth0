using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace netcore_react_docker.Models
{
    public class AuthSettings
    {
        public string ClientId { get; set; }
        public string Domain { get; set; }
        public string Audience { get; set; }
        public string Scope { get; set; }
    }
}
