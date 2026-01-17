namespace api.Models;

/// <summary>
/// Context of the career item
/// </summary>
public enum ContextType
{
    CDI = 0,        // permanent contract
    CDD = 1,        // fixed-term contract
    INTERNSHIP = 2, // Internship
    EDUCATION = 3   // School / university
}