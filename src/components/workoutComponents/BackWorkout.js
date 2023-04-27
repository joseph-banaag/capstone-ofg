import Button from "react-bootstrap/Button";
import "./css/workoutPrograms.css";

const BackWorkout = () => {
  return (
    <div>
      <div className="program_of_the_day">
        <div className="program_title">
          <div className="master_workout">
            <div className="col-3 program_execution">
              <span className="warmUp">Do the following for warm up:</span>
              <ul>
                <li className="program_list" id="program_item">
                  <span style={{ color: "#ffb703", fontSize: "1.2rem" }}>
                    Lat Pull Down
                  </span>
                  <ul>
                    <li className="program_list">
                      <span style={{ color: "#378696", fontWeight: "bold" }}>
                        First set:
                      </span>{" "}
                      10 reps of 5 Kg dumbbell
                    </li>
                    <li className="program_list">
                      <span style={{ color: "#378696", fontWeight: "bold" }}>
                        Second set:
                      </span>{" "}
                      10 reps of 5 Kg dumbbell
                    </li>
                  </ul>
                </li>
                <li className="program_list" id="program_item">
                  <span style={{ color: "#ffb703", fontSize: "1.2rem" }}>
                    Seated Row
                  </span>

                  <ul>
                    <li className="program_list">
                      <span style={{ color: "#378696", fontWeight: "bold" }}>
                        First set:
                      </span>{" "}
                      10 reps of 2.5 Kg dumbbell
                    </li>
                    <li className="program_list">
                      <span style={{ color: "#378696", fontWeight: "bold" }}>
                        Second set:
                      </span>{" "}
                      10 reps of 2.5 Kg dumbbell
                    </li>
                  </ul>
                </li>
                <li className="program_list" id="program_item">
                  <span style={{ color: "#ffb703", fontSize: "1.2rem" }}>
                    Dumbbell Bent Over Row
                  </span>

                  <ul>
                    <li className="program_list">
                      <span style={{ color: "#378696", fontWeight: "bold" }}>
                        First set:
                      </span>{" "}
                      10 reps of 2.5 Kg dumbbell
                    </li>
                    <li className="program_list">
                      <span style={{ color: "#378696", fontWeight: "bold" }}>
                        Second set:
                      </span>{" "}
                      10 reps of 2.5 Kg dumbbell
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className=" col-9 main_workout">
              <h2>Workout Set</h2>

              <div className="workoutSet_container">
                <div className="col-4 workoutSet">
                  <li className="program_list" id="program_item">
                    <span style={{ color: "#ffb703", fontSize: "1.2rem" }}>
                      Pull Ups
                    </span>
                    <ul className="workSet_container">
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          First set:
                        </span>{" "}
                        10 reps
                      </li>
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          Second set:
                        </span>{" "}
                        15 reps
                      </li>
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          Third set:
                        </span>{" "}
                        Up to failure
                      </li>
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          Fourth set:
                        </span>{" "}
                        Up to failure
                      </li>
                    </ul>

                    <div className="play_container">
                      <Button
                        className="play_button btn btn-danger p-0"
                        href="https://youtu.be/3ml7BH7mNwQ"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          class="bi bi-play-btn-fill"
                          viewBox="0 0 16 16"
                          className="play_btn"
                        >
                          <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </svg>
                      </Button>
                    </div>
                    <p className="clickIt">
                      Click the play button to see the workout.
                    </p>
                  </li>
                </div>
                <div className="col-4 workoutSet">
                  <li className="program_list" id="program_item">
                    <span style={{ color: "#ffb703", fontSize: "1.2rem" }}>
                      Deadlifts
                    </span>
                    <ul className="workSet_container">
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          First set:
                        </span>{" "}
                        10 reps of 50 Kg barbell
                      </li>
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          Second set:
                        </span>{" "}
                        10 reps of 60 Kg barbell
                      </li>
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          Third set:
                        </span>{" "}
                        10 reps of 70 Kg barbell
                      </li>
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          Fourth set:
                        </span>{" "}
                        5 reps of 100 Kg barbell
                      </li>
                    </ul>

                    <div className="play_container">
                      <Button
                        className="play_button btn btn-danger p-0"
                        href="https://youtu.be/JEnhFC1AtHw"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          class="bi bi-play-btn-fill"
                          viewBox="0 0 16 16"
                          className="play_btn"
                        >
                          <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </svg>
                      </Button>
                    </div>
                    <p className="clickIt">
                      Click the play button to see the workout.
                    </p>
                  </li>
                </div>
                <div className="col-4 workoutSet">
                  <li className="program_list" id="program_item">
                    <span style={{ color: "#ffb703", fontSize: "1.2rem" }}>
                      T-Bar Row
                    </span>
                    <ul className="workSet_container">
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          First set:
                        </span>{" "}
                        10 reps of 15 Kg barbell
                      </li>
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          Second set:
                        </span>{" "}
                        10 reps of 15 Kg barbell
                      </li>
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          Third set:
                        </span>{" "}
                        15 reps of 15 Kg barbell
                      </li>
                      <li className="program_list">
                        <span style={{ color: "#378696", fontWeight: "bold" }}>
                          Fourth set:
                        </span>{" "}
                        25 reps of 15 Kg barbell
                      </li>
                    </ul>

                    <div className="play_container">
                      <Button
                        className="play_button btn btn-danger p-0"
                        href="https://youtu.be/WJm9zA2NY8E"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          class="bi bi-play-btn-fill"
                          viewBox="0 0 16 16"
                          className="play_btn"
                        >
                          <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </svg>
                      </Button>
                    </div>
                    <p className="clickIt">
                      Click the play button to see the workout.
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackWorkout;
