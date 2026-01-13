using System.ComponentModel.DataAnnotations;
using api.Models;

namespace api.Models
{
   public class Career
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
      [MaxLength(250)]
      public string Place { get; set; } = string.Empty; 
      
      [Required]
      public DateTime BeginDate { get; set; }
      
      public DateTime? EndDate { get; set; }
      
      [Required]
      public ContextType Context { get; set; }

   }
}
