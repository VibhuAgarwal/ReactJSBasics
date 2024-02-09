import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (<section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
            {CORE_CONCEPTS.map((concept) =>
                <CoreConcept key={concept.title}{...concept} />
            )}

            {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
        </ul>
    </section>
    )
}