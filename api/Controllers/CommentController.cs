using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _comRepo;

        public CommentController(ICommentRepository comRepo)
        {
            _comRepo = comRepo;
        }


        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var comments = await _comRepo.GetAllAsync();

            var commentDto = comments.Select(s=> s.ToCommentDto());

            return Ok(commentDto);

        }























    }
}