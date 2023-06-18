using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MovieList.Model
{
    public class MovieContextFactory : IDesignTimeDbContextFactory<MovieContext>
    {
        public MovieContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory() + "/../Movie")
                .AddJsonFile("appsettings.json")
                .Build();
            var optionsBuilder = new DbContextOptionsBuilder<MovieContext>();
            optionsBuilder = new DbContextOptionsBuilder<MovieContext>();

            return new MovieContext(optionsBuilder.Options);
        }
    }
}