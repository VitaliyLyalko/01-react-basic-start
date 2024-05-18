import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
	const input = useRef()
	const [show, setShow] = useState(false)

	function handleKeyDown(event) {
		if (event.key === 'Enter') {
			setShow(true)
		}
	}
	
  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
		ref={input}
        type="text"
        className="control"
		  onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });
  //   const [name, setName] = useState("");
  //   const [hasError, setHasError] = useState(true);
  //   const [reason, setReason] = useState("help");

  function handlenameChange(event) {
    //  setName(event.target.value);
    //  setHasError(event.target.value.trim().length === 0);
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  function toggleError() {
    //  setHasError((prev) => !prev);
    //  setHasError(!hasError);
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      {/* <Button onClick={toggleError}>Toggle Error</Button> */}
      <form style={{marginBottom: '1rem'}} >
        <label htmlFor="name">Ваше ім'я</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handlenameChange}
        />

        <label htmlFor="reason">Причина звернення</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="errer">Помилка</option>
          <option value="help">Потрібна допомога</option>
          <option value="suggest">Пропозиція</option>
        </select>
        <pre>
          Name: {form.name}
          <br />
          Reason: {form.reason}
        </pre>
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Відправити
        </Button>
      </form>
      <hr />
      <StateVsRef />
    </section>
  );
}
