using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class newUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CareerSkill_Skill_SkillsId",
                table: "CareerSkill");

            migrationBuilder.DropForeignKey(
                name: "FK_CareerTool_Tool_ToolsId",
                table: "CareerTool");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectSkill_Skill_SkillsId",
                table: "ProjectSkill");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectTool_Tool_ToolsId",
                table: "ProjectTool");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Tool",
                table: "Tool");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Skill",
                table: "Skill");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Skill");

            migrationBuilder.RenameTable(
                name: "Tool",
                newName: "Tools");

            migrationBuilder.RenameTable(
                name: "Skill",
                newName: "Skills");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Tools",
                table: "Tools",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Skills",
                table: "Skills",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Degrees",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    CareerId = table.Column<Guid>(type: "uuid", nullable: false),
                    DateObtained = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Degrees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Degrees_Careers_CareerId",
                        column: x => x.CareerId,
                        principalTable: "Careers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Degrees_CareerId",
                table: "Degrees",
                column: "CareerId");

            migrationBuilder.AddForeignKey(
                name: "FK_CareerSkill_Skills_SkillsId",
                table: "CareerSkill",
                column: "SkillsId",
                principalTable: "Skills",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CareerTool_Tools_ToolsId",
                table: "CareerTool",
                column: "ToolsId",
                principalTable: "Tools",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectSkill_Skills_SkillsId",
                table: "ProjectSkill",
                column: "SkillsId",
                principalTable: "Skills",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectTool_Tools_ToolsId",
                table: "ProjectTool",
                column: "ToolsId",
                principalTable: "Tools",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CareerSkill_Skills_SkillsId",
                table: "CareerSkill");

            migrationBuilder.DropForeignKey(
                name: "FK_CareerTool_Tools_ToolsId",
                table: "CareerTool");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectSkill_Skills_SkillsId",
                table: "ProjectSkill");

            migrationBuilder.DropForeignKey(
                name: "FK_ProjectTool_Tools_ToolsId",
                table: "ProjectTool");

            migrationBuilder.DropTable(
                name: "Degrees");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Tools",
                table: "Tools");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Skills",
                table: "Skills");

            migrationBuilder.RenameTable(
                name: "Tools",
                newName: "Tool");

            migrationBuilder.RenameTable(
                name: "Skills",
                newName: "Skill");

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Skill",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Tool",
                table: "Tool",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Skill",
                table: "Skill",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CareerSkill_Skill_SkillsId",
                table: "CareerSkill",
                column: "SkillsId",
                principalTable: "Skill",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CareerTool_Tool_ToolsId",
                table: "CareerTool",
                column: "ToolsId",
                principalTable: "Tool",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectSkill_Skill_SkillsId",
                table: "ProjectSkill",
                column: "SkillsId",
                principalTable: "Skill",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectTool_Tool_ToolsId",
                table: "ProjectTool",
                column: "ToolsId",
                principalTable: "Tool",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
