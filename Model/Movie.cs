using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movie.Model
{
    public class Movie
    {
        public int Id { get; set; }
        public string imdb_id { get; set; }
        public int popularity { get; set; }
        public int budget { get; set; }
        public int revenue { get; set; }
        public string original_title { get; set; }
        public string[] cast { get; set; }
        public string homepage { get; set; }
        public string director { get; set; }
        public string tagline { get; set; }
        public string keywords { get; set; }
        public string overview { get; set; }
        public int runtime { get; set; }
        public string[] genres { get; set; }
        public string[] production_companies { get; set; }
        public string release_date { get; set; }
        public int vote_count { get; set; }
        public double vote_average { get; set; }
        public int release_year { get; set; }
        public int budget_adj { get; set; }
        public int revenue_adj { get; set; }
    }
}