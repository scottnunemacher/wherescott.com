import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { DateTime } from "luxon";
import fs from 'fs';

// Read: https://www.11ty.dev/docs/config/
export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("public");
    eleventyConfig.setDataDirectory("_data");
    eleventyConfig.setIncludesDirectory("_includes");
    eleventyConfig.setLayoutsDirectory("_includes/layouts");

    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("src/assets/js");

    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.setQuietMode(true);

    // Read: https://github.com/moment/luxon/blob/master/docs/formatting.md
    eleventyConfig.addFilter("publishedDateLocal", (dateObj) => {
        // return DateTime.fromJSDate(dateObj).toFormat("fff");
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
    });

    eleventyConfig.addFilter("lastUpdatedISO", (filePath) => {
        const stats = fs.statSync(filePath);
        const lastModified = stats.mtime;
        return DateTime.fromJSDate(lastModified).toUTC().toISO(); // Return as ISO string in UTC
    });
}
