using CsvHelper;
using System.IO;
using System.Globalization;

public class Reader
{
    public List<Movie> ReadCsv(string path)
    {
        System.Globalization.CultureInfo.CurrentCulture.TextInfo.ListSeparator = "~";
        using (var reader = new StreamReader(path))
        using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
        {
            var records = csv.GetRecords<Movie>().ToList();
            return records;
        }
    }
}