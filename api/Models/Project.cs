using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Project
    {
        public Guid Id { get; set; }

        [Required]
        [MaxLength(25)]
        public string Name { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string ShortDescription { get; set; } = string.Empty;
        
        [Required]
        [MaxLength(1000)]
        public string Description { get; set; } = string.Empty;
        
        [Required]
        public ProjectType Type { get; set; }
        
        [MaxLength(250)]
        public string GithubLink { get; set; } = string.Empty;
        
        [Required]
        public ProjectStatus Status { get; set; }
        
        public ICollection<Tool> Tools { get; set; } = new List<Tool>();
        
        public ICollection<Skill> Skills { get; set; } = new List<Skill>();
    }
}