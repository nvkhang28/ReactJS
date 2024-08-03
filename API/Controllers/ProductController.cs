using API.Data;
<<<<<<< HEAD
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
=======
using API.Entities;
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

<<<<<<< HEAD
public class ProductsController : BaseApiController
{
    private readonly StoreContext _context;
    private readonly IMapper _mapper;
    private readonly ImageService _imageService;
    public ProductsController(StoreContext context, IMapper mapper, ImageService imageService)
    {
        _imageService = imageService;
        _mapper = mapper;
=======

public class ProductController : BaseApiController
{
    private readonly StoreContext _context;
    public ProductController(StoreContext context)
    {
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
        _context = context;
    }

    [HttpGet]
<<<<<<< HEAD
    public async Task<ActionResult<PagedList<Product>>> GetProducts([FromQuery] ProductParams productParams)
    {
        var query = _context.Products
            .Sort(productParams.OrderBy)
            .Search(productParams.SearchTerm)
            .Filter(productParams.Brands, productParams.Types)
            .AsQueryable();

        var products =
            await PagedList<Product>.ToPagedList(query, productParams.PageNumber, productParams.PageSize);

        Response.AddPaginationHeader(products.MetaData);

        return products;
    }

    [HttpGet("{id}", Name = "GetProduct")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null) return NotFound();

        return product;
    }

    [HttpGet("filters")]
    public async Task<IActionResult> GetFilters()
    {
        var brands = await _context.Products.Select(p => p.Brand).Distinct().ToListAsync();
        var types = await _context.Products.Select(p => p.Type).Distinct().ToListAsync();

        return Ok(new { brands, types });
    }

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<Product>> CreateProduct([FromForm] CreateProductDto productDto)
    {
        var product = _mapper.Map<Product>(productDto);

        if (productDto.File != null)
        {
            var imageResult = await _imageService.AddImageAsync(productDto.File);

            if (imageResult.Error != null) return BadRequest(new ProblemDetails
            {
                Title = imageResult.Error.Message
            });

            product.PictureUrl = imageResult.SecureUrl.ToString();
            product.PublicId = imageResult.PublicId;
        }

        _context.Products.Add(product);

        var result = await _context.SaveChangesAsync() > 0;

        if (result) return CreatedAtRoute("GetProduct", new { Id = product.Id }, product);

        return BadRequest(new ProblemDetails { Title = "Problem creating new product" });
    }

    [Authorize(Roles = "Admin")]
    [HttpPut]
    public async Task<ActionResult<Product>> UpdateProduct([FromForm] UpdateProductDto productDto)
    {
        var product = await _context.Products.FindAsync(productDto.Id);

        if (product == null) return NotFound();

        _mapper.Map(productDto, product);

        _mapper.Map(productDto, product);

        if (productDto.File != null)
        {
            var imageUploadResult = await _imageService.AddImageAsync(productDto.File);

            if (imageUploadResult.Error != null)
                return BadRequest(new ProblemDetails { Title = imageUploadResult.Error.Message });

            if (!string.IsNullOrEmpty(product.PublicId))
                await _imageService.DeleteImageAsync(product.PublicId);

            product.PictureUrl = imageUploadResult.SecureUrl.ToString();
            product.PublicId = imageUploadResult.PublicId;
        }

        var result = await _context.SaveChangesAsync() > 0;

        if (result) return Ok(product);

        return BadRequest(new ProblemDetails { Title = "Problem updating product" });
    }

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);

        if (product == null) return NotFound();

        if (!string.IsNullOrEmpty(product.PublicId))
            await _imageService.DeleteImageAsync(product.PublicId);

        _context.Products.Remove(product);

        var result = await _context.SaveChangesAsync() > 0;

        if (result) return Ok();

        return BadRequest(new ProblemDetails { Title = "Problem deleting product" });
=======
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
        return await _context.Products.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        return await _context.Products.FindAsync(id);
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
    }
}