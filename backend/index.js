import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
 
mongoose
  .connect("mongodb://127.0.0.1/BookingDetails")
  .then((res) => {
    if (res) {
      console.log("Database connected !!");
    }
  })
  .catch((err) => {
    console.log(err);
  });
 
const userschema = new mongoose.Schema({
  vname: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  date: { type: Date, required: true },
  message: { type: String, required: true }
});

 
const getintouch = mongoose.model("bookingdata", userschema);
 
app.get("/", (req, res) => {
  res.send("Server Started..");
});
 
 
 
app.post("/Booking", (req, res) => {
  console.log(req.body);
 
  getintouch
    .findOne({ email: req.body.email })
    .then((resp) => {
      if (resp) {
        res.send("Already booked with this email");
      } else {
        const newuser = getintouch({
          vname: req.body.vname,
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          date: req.body.date,
          message:req.body.message,
        });
 
        newuser
          .save()
          .then((ack) => {
            if (ack) {
              res.send("We will soon contact you. \n Thank you for booking with us!");            
            } else {
              res.send("An error occured while booking...!");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
 
app.listen(8000,()=>{
    console.log("Server started at port no 8000")
})


// Contact
const contactschema = new mongoose.Schema({
  cname: { type: String, required: true },
  email_id: { type: String, required: true },
  phone_number: { type: Number, required: true },
  pincode: { type: Number, required: true },
  message: { type: String, required: true }
});

 
const contactus = mongoose.model("contactdata", contactschema);
 
app.get("/", (req, res) => {
  res.send("Server Started..");
});
 
 
 
app.post("/Contact", (req, res) => {
  console.log(req.body);
 
  contactus
    .findOne({ email_id: req.body.email_id })
    .then((resp) => {
      if (resp) {
        res.send("Already contacted with this email");
      } else {
        const newuser = contactus({
          cname: req.body.cname,
          email_id: req.body.email_id,
          phone_number: req.body.phone_number,
          pincode: req.body.pincode,
          message:req.body.message,
        });
 
        newuser
          .save()
          .then((ack) => {
            if (ack) {
              res.send("We will soon contact you. \n Thank you for contacting us!");            
            } else {
              res.send("An error occured while contacting...!");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
 

// signup
const signupschema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});



const signup = mongoose.model("userdata", signupschema);


app.get("/", (req, res) => {
  res.send("Server Started..");
});



app.post("/Signup", (req, res) => {
  console.log(req.body);

  signup
    .findOne({ email: req.body.email })
    .then((resp) => {
      if (resp) {
        res.send("Your account is already present. Please Login");
      } else {
        const newuser = signup({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });

        newuser
          .save()
          .then((ack) => {
            if (ack) {
              res.send("Account created successfully!!");
            } else {
              res.send("Error occured while creating the account...!");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});


// login
const login = mongoose.model("userdata", signupschema);

app.post("/Login", (req, res) => {
  console.log(req.body);

  login
    .findOne({ username: req.body.username, password: req.body.password })
    .then((resp) => {
      if (resp) {
        res.send("Welcome to our website");

      } else {
        res.send("Invalid username or password. Try Creating an account");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// Cancellation
const cancellationschema = new mongoose.Schema({
  email: { type: String, required: true },
  cancelledAt: { type: Date, default: Date.now }
});

const cancelBooking = mongoose.model("cancelBookingData", cancellationschema);

app.post("/Cancellation", (req, res) => {
  console.log(req.body);

  getintouch
    .findOneAndDelete({ email: req.body.email })
    .then((resp) => {
      if (resp) {
        const newCancellation = new cancelBooking({
          email: req.body.email
        });

        newCancellation.save().then((ack) => {
          if (ack) {
            res.send("Your booking has been cancelled.");
          } else {
            res.send("An error occurred while recording the cancellation.");
          }
        }).catch((err) => {
          console.log(err);
        });

        res.send("Your booking has been cancelled.");
      } else {
        res.send("No booking found with this email.");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});


