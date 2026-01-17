using System.ComponentModel.DataAnnotations;

namespace api.Models;

/// <summary>
/// Skills like language of programmation, data transformation, knowledge, etc..
/// </summary>
public class Skill
{
    public Guid Id { get; set; }
    
    [Required]
    [MaxLength(50)]
    public string Name { get; set; } = string.Empty;
}