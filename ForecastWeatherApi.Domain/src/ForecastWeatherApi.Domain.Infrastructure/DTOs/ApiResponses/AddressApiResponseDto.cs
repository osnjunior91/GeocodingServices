﻿namespace ForecastWeatherApi.Domain.src.ForecastWeatherApi.Domain.Infrastructure.DTOs.ApiResponses
{
    public class AddressApiResponseDto
    {
        public Result Result { get; set; }
    }
    public class Result
    {
        public Input Input { get; set; }
        public List<AddressMatch> AddressMatches { get; set; }
        public string FilterByCoords => $"{AddressMatches[0].Coordinates.Y},{AddressMatches[0].Coordinates.X}";
    }

    public class Input
    {
        public Address Address { get; set; }
        public Benchmark Benchmark { get; set; }
    }

    public class Address
    {
        public string Zip { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string State { get; set; }
    }

    public class Benchmark
    {
        public bool IsDefault { get; set; }
        public string BenchmarkDescription { get; set; }
        public string Id { get; set; }
        public string BenchmarkName { get; set; }
    }

    public class AddressMatch
    {
        public TigerLine TigerLine { get; set; }
        public Coordinates Coordinates { get; set; }
        public AddressComponents AddressComponents { get; set; }
        public string MatchedAddress { get; set; }
    }

    public class TigerLine
    {
        public string Side { get; set; }
        public string TigerLineId { get; set; }
    }

    public class Coordinates
    {
        public double X { get; set; }
        public double Y { get; set; }
    }

    public class AddressComponents
    {
        public string Zip { get; set; }
        public string StreetName { get; set; }
        public string PreType { get; set; }
        public string City { get; set; }
        public string PreDirection { get; set; }
        public string SuffixDirection { get; set; }
        public string FromAddress { get; set; }
        public string State { get; set; }
        public string SuffixType { get; set; }
        public string ToAddress { get; set; }
        public string SuffixQualifier { get; set; }
        public string PreQualifier { get; set; }
    }
}
