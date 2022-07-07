import cheerio from "cheerio";
import { first } from "cheerio/lib/api/traversing";
import axios from "axios";

const getCongressData =async (): Promise<Array<any>> => {
	// Get the data
	const targetUrl = "https://www.congress.gov/search?q=%7B%22congress%22%3A%5B%22117%22%5D%2C%22source%22%3A%22all%22%2C%22search%22%3A%22veteran%22%7D";
	const pageResponse = await axios.get(targetUrl);
	
	//hold results
	const keys = [];
	const result = [];
	//load content to cheerio
	//scrape the content
	//return results
}