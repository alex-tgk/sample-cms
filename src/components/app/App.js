import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import copy from '../../assets/copy/page.json';
import Page from "../page/page";


const populatePageData = (page, data) => {
  const populatedBlocks = page.content.blocks.map(
    (block) => data.find(x => x.id === block.id)
  )
  return {
    ...page,
    content: {
      ...page.content,
      blocks: populatedBlocks
    }
  }
}

function App() {
  const {data, schema} = copy
  const pages = data.filter((x) => x.type === "page");
  const populatedPages = pages.map(
    (page) => populatePageData(page, data)
  )
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            {
              pages.map(
                (page) => (
                  <li key={`page-link-${page.id}`}>
                    <Link to={page.content.slug}>
                      {page.content.displayName}
                    </Link>
                  </li>
                )
              )
            }
          </ul>
        </div>
        <hr/>
        <Switch>
          {
            populatedPages.map(
              (page) => (
                <Route key={`page-${page.id}`} path={page.content.slug} exact>
                  <Page {...page.content} />
                </Route>
              )
            )
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
