import WayToTeach from "./WayToTeach";
import { ways } from "../data";

export default function TeachingSection() {
  return (
    <section>
      <h3>Наш підхід до навчання</h3>
      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
        {/* <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} /> */}
      </ul>
    </section>
  );
}
