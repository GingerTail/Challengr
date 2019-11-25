import React, { Component } from "react";
import "../FilterNav/filternav.css"

export default class FilterNav extends Component {
  render() {
    return (
      <>
        <div className="filternav-container">
          <h4>Filter:</h4>
          <form action="/action_page.php">
            <p>
              <strong>Languages</strong>
            </p>
            <input type="checkbox" name="javascript" value="javascript" /> Javascript
            <br />
            <input type="checkbox" name="html" value="html" /> HTML
            <br />
            <input type="checkbox" name="css" value="css" /> CSS
            <br />
            <input type="checkbox" name="nodejs" value="nodejs" /> NodeJS
            <br />
            <br />
          </form>
          <form action="/action_page.php">
            <p>
              <strong>Difficulty</strong>
            </p>
            <input type="checkbox" name="easy" value="easy" /> Easy
            <br />
            <input type="checkbox" name="normal" value="normal" /> Normal
            <br />
            <input type="checkbox" name="hard" value="hard" /> Hard
            <br />
            <br />
          </form>
          <form action="/action_page.php">
            <p>
              <strong>Type</strong>
            </p>
            <input type="checkbox" name="quiz" value="quiz" /> Quiz
            <br />
            <input type="checkbox" name="code" value="code" /> Code
            <br />
            <input type="checkbox" name="demo" value="demo" /> Demo
            <br />
            <br />
          </form>
        </div>
      </>
    );
  }
}
