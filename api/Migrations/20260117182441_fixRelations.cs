using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class fixRelations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CareerSkill");

            migrationBuilder.DropTable(
                name: "CareerTool");

            migrationBuilder.DropTable(
                name: "ProjectSkill");

            migrationBuilder.DropTable(
                name: "ProjectTool");

            migrationBuilder.AddColumn<Guid>(
                name: "CareerId",
                table: "Tools",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ProjectId",
                table: "Tools",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "CareerId",
                table: "Skills",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ProjectId",
                table: "Skills",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tools_CareerId",
                table: "Tools",
                column: "CareerId");

            migrationBuilder.CreateIndex(
                name: "IX_Tools_ProjectId",
                table: "Tools",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Skills_CareerId",
                table: "Skills",
                column: "CareerId");

            migrationBuilder.CreateIndex(
                name: "IX_Skills_ProjectId",
                table: "Skills",
                column: "ProjectId");

            migrationBuilder.AddForeignKey(
                name: "FK_Skills_Careers_CareerId",
                table: "Skills",
                column: "CareerId",
                principalTable: "Careers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Skills_Projects_ProjectId",
                table: "Skills",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tools_Careers_CareerId",
                table: "Tools",
                column: "CareerId",
                principalTable: "Careers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tools_Projects_ProjectId",
                table: "Tools",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Skills_Careers_CareerId",
                table: "Skills");

            migrationBuilder.DropForeignKey(
                name: "FK_Skills_Projects_ProjectId",
                table: "Skills");

            migrationBuilder.DropForeignKey(
                name: "FK_Tools_Careers_CareerId",
                table: "Tools");

            migrationBuilder.DropForeignKey(
                name: "FK_Tools_Projects_ProjectId",
                table: "Tools");

            migrationBuilder.DropIndex(
                name: "IX_Tools_CareerId",
                table: "Tools");

            migrationBuilder.DropIndex(
                name: "IX_Tools_ProjectId",
                table: "Tools");

            migrationBuilder.DropIndex(
                name: "IX_Skills_CareerId",
                table: "Skills");

            migrationBuilder.DropIndex(
                name: "IX_Skills_ProjectId",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "CareerId",
                table: "Tools");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "Tools");

            migrationBuilder.DropColumn(
                name: "CareerId",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "ProjectId",
                table: "Skills");

            migrationBuilder.CreateTable(
                name: "CareerSkill",
                columns: table => new
                {
                    CareerId = table.Column<Guid>(type: "uuid", nullable: false),
                    SkillsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CareerSkill", x => new { x.CareerId, x.SkillsId });
                    table.ForeignKey(
                        name: "FK_CareerSkill_Careers_CareerId",
                        column: x => x.CareerId,
                        principalTable: "Careers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CareerSkill_Skills_SkillsId",
                        column: x => x.SkillsId,
                        principalTable: "Skills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CareerTool",
                columns: table => new
                {
                    CareerId = table.Column<Guid>(type: "uuid", nullable: false),
                    ToolsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CareerTool", x => new { x.CareerId, x.ToolsId });
                    table.ForeignKey(
                        name: "FK_CareerTool_Careers_CareerId",
                        column: x => x.CareerId,
                        principalTable: "Careers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CareerTool_Tools_ToolsId",
                        column: x => x.ToolsId,
                        principalTable: "Tools",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProjectSkill",
                columns: table => new
                {
                    ProjectsId = table.Column<Guid>(type: "uuid", nullable: false),
                    SkillsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectSkill", x => new { x.ProjectsId, x.SkillsId });
                    table.ForeignKey(
                        name: "FK_ProjectSkill_Projects_ProjectsId",
                        column: x => x.ProjectsId,
                        principalTable: "Projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProjectSkill_Skills_SkillsId",
                        column: x => x.SkillsId,
                        principalTable: "Skills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProjectTool",
                columns: table => new
                {
                    ProjectsId = table.Column<Guid>(type: "uuid", nullable: false),
                    ToolsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectTool", x => new { x.ProjectsId, x.ToolsId });
                    table.ForeignKey(
                        name: "FK_ProjectTool_Projects_ProjectsId",
                        column: x => x.ProjectsId,
                        principalTable: "Projects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProjectTool_Tools_ToolsId",
                        column: x => x.ToolsId,
                        principalTable: "Tools",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CareerSkill_SkillsId",
                table: "CareerSkill",
                column: "SkillsId");

            migrationBuilder.CreateIndex(
                name: "IX_CareerTool_ToolsId",
                table: "CareerTool",
                column: "ToolsId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectSkill_SkillsId",
                table: "ProjectSkill",
                column: "SkillsId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectTool_ToolsId",
                table: "ProjectTool",
                column: "ToolsId");
        }
    }
}
