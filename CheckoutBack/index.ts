import express, {Request,Response,NextFunction,RequestHandler} from 'express'
import { config } from './utils/config'
import userRoutes from './routes/user_routes'
// import { stringify } from 'querystring'
// import { User } from './models/user_model';
const app = express();

const port = config.port;
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//The is for handling cors
app.use((req: Request, res: Response, next: NextFunction)=>{    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');
    if('OPTIONS'==req.method){
        // can later use this for ip tracking
    }
    // else{console.log(`An error has occured :${req.ip} ${req.method} ${req.url}`)
    //     // this will be good for finding users having loading problems
    //     next(); // Pass to next layer of middleware
    // }
    next()
});

app.use('/user', userRoutes)

// temporay test route
app.get('/', (req: Request, res: Response)=>{
    res.send("hello world")
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})
