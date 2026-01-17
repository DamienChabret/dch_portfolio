namespace api.Models;

public class Degree
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public Career Career { get; set; }
    public DateTime DateObtained { get; set; }
}