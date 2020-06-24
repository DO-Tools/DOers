import $ from "jquery";

const applySponsorGraphs = (): void => {
    $(".post_content > tbody").append(
        // add another row
        $("<tr></tr>")
            .css("text-align", "center")
            .append(
                // with a 2-size cell
                $("<td colspan='2'></td>").append(
                    $("<h2></h2>").text("Below is the sponsor graphs based on TFisch's excellent work"),
                    // to hold the sponsor graph
                    $("<img />").attr({
                        src: "https://raw.githubusercontent.com/DO-Tools/DOers/master/src/assets/sponsors-graph.gif",
                        alt: "Sponsors graph",
                    })
                )
            )
    );
};

export default applySponsorGraphs;
