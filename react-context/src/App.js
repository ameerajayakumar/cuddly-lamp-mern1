import Dashboard from "./components/Dashboard";
import "./styles.css";
/**
 * Generates a unique id -> To be used for React Keys
 */
export const uid = () => Math.random().toString(36).substr(2, 9);

/**
 * Calculates the total of all the values of the counter objext
 * @param {{[counterId: string]: number}} counter
 */
export const totalCount = (counters = []) => {
  if (!counters.length) return 0;

  return counters.map((counter) => counter.value).reduce((n, i) => n + i);
};

export default function App() {
  //The App has a main Dashboard Component
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}
