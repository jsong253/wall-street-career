# wall-street-career
this is a react app created by create-react-app tool chain

# go to https://github.com/ and click add a new repo wall-street-career and use github desktop to clone it to your local c:\project area\wall-street-career

# open visaul code and type npx create-react-app wall-street=career to add generated code to github.

# once the CRA generated the new code, use github desktop to commit the code.

# you can go to  https://github.com/ to see the wall-street-career repo with the new code changes in the remote master branch once you commit the code changes in github desktop

# npm i react-pdf axios cross-env npm-run-all json-server history react-router-dom

# in vs code, add Hashicorp Terraform, Live Server, Prettier - Code formatter, Sapling

# in cs code, go to file=>Preference=>Setting and set up auto save, Text Editor=>Formatting and check format on save.

#  "start-api": "json-server --port 3001 --watch db.json --delay 0", change --delay 2000 to make loading 2 seconds delay

# "start-app": "cross-env REACT_APP_API_BASE_URL=http://localhost:3001/ react-scripts start", REACT_APP_API_BASE_URL is the ebvironment varaible used in the code like process.env.REACT_APP_API_BASE_URL

#    <Route path="/course/:category" element={<Courses/>} />, :category is the placeholder and pass it in the useFetch() call component like const { data: courses, loading, error } = useFetch("courses?category=" + category  ); you can use destructurring to get the category: import { useParams } from "react-router-dom"; const { category } = useParams();

# npm i -D run-p