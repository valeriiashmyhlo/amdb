import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import rootEpic from './epics/rootEpic';
import appReducer from './reducers/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  form: formReducer
})

const epicMiddleware = createEpicMiddleware(rootEpic);
const loggerMiddleware = createLogger({});

export default createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, loggerMiddleware)
)
