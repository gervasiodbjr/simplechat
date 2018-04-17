
import consign from 'consign';
import app from './app/config/server';

consign({cwd: 'app'})
    .include('routes')
    .then('config/dbConnection.js')
    .then('models')
    .then('controllers')
    .into(app);

app.listen(3000, () => {
    console.log('Server start on port 3000');
});
