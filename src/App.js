import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./component/Login";
import CreatChanel from "./component/pages/creatchanelpage";
import CreateDocument from "./component/pages/creatdocpage";
import CreateThreatRulePage from "./component/pages/createtheaterulepage";
import CreateValue from "./component/pages/creatvaluepage";
import ThreatRuleUpdateDetails from "./component/pages/threadruledetailspage";
import ThreatRuleDeletepage from "./component/pages/threadruledeletepage";
import ThreatRuleSelectPage from "./component/pages/threadruleselectpage";
import CreateConditionPage from "./component/pages/createconditionpage";
import DeleteConditionPage from "./component/pages/deleteconditionpage";
import SelectConditionPage from "./component/pages/selectconditionpage";
import ConditionDetailsPage from "./component/pages/conditiondetailspage";
import RuleTypeDetailsPage from "./component/pages/ruletypedetailspage";
import RuleTypeCreatePage from "./component/pages/ruletypecreatepage";
import RuleTypeDeletePage from "./component/pages/ruletypedeletepage";
import RuleTypeSelectPage from "./component/pages/ruletypeselectpage";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/Home" component={Main_Home} exact/> */}
        <Route path='/' component={Login} exact />
        {/* <Route path='/createchanal' component={CreatChanel} exact />
        <Route path='/createdocument' component={CreateDocument} exact />
        <Route path='/createvalue' component={CreateValue} exact /> */}
        <Route path='/threatruleupdatedetails' component={ThreatRuleUpdateDetails} exact />
        <Route path='/threatrulecreatepage' component={CreateThreatRulePage} exact />
        <Route path='/threatruledeletepage' component={ThreatRuleDeletepage} exact />
        <Route path='/threatruleselectpage' component={ThreatRuleSelectPage} exact />
        <Route path='/createconditionpage' component={CreateConditionPage} exact />
        <Route path='/deleteconditionpage' component={DeleteConditionPage} exact />
        <Route path='/selectconditionpage' component={SelectConditionPage} exact />
        <Route path='/conditiondetailspage' component={ConditionDetailsPage} exact />
        <Route path='/ruletypedetailspage' component={RuleTypeDetailsPage} exact />
        <Route path='/ruletypecreatepage' component={RuleTypeCreatePage} exact />
        <Route path='/ruletypedeletepage' component={RuleTypeDeletePage} exact />
        <Route path='/ruletypeselectpage' component={RuleTypeSelectPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
