import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
var loading = require('./models/home/loading');
// console.log(loading);
// 3. Model
app.model(require('./models/count'));
app.model(require('./models/todo'));
app.model(loading);
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
