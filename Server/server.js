const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { sequelize, User, KruWaterBill, Payment, Kon,Confirmation,Donation ,Projektet,Participation,Prishtina,FamilyDoctorRequest,ElectronicPassport,
  Policia2, Policia3, KescoBill,Donacioni,Verifikimi,DokElektronike,FaturaPer,ApLehonat,ApFemije, AutoRegjistrim,AutoB, AutoP,CertiFam,Deklarimi,
  AdPostare,Vula
} = require('./db');
const app = express();
const fs = require('fs'); 
const path = require('path');
const PDFDocument = require('pdfkit');
const pdf = require('html-pdf');


app.use(cors());
app.use(express.json());
// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API Information',
      contact: {
        name: 'Developer',
        email: 'developer@example.com'
      },
      servers: [{ url: 'http://localhost:5000' }]
    }
  },
  apis: ['./server.js'] // Files containing Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Sync the database and create the tables
sequelize.sync().then(() => {
  console.log('Database & tables created!');
}).catch(error => {
  console.error('Unable to create tables:', error);
});

// Signup route
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - usernameR
 *               - passwordR
 *             properties:
 *               usernameR:
 *                 type: string
 *               passwordR:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Username and password are required
 *       409:
 *         description: Username taken
 *       500:
 *         description: Internal server error
 */
app.post('/signup', async (req, res) => {
  const { usernameR, passwordR } = req.body;

  if (!usernameR || !passwordR) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Check if username is already taken
    const existingUser = await User.findOne({ where: { usernameR } });
    if (existingUser) {
      return res.status(409).json({ message: 'Username taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(passwordR, 10);

    // Create new user
    const newUser = await User.create({ usernameR, passwordR: hashedPassword });
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - usernameR
 *               - passwordR
 *             properties:
 *               usernameR:
 *                 type: string
 *               passwordR:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid username or password
 *       500:
 *         description: Internal server error
 */
app.post('/login', async (req, res) => {
  const { usernameR, passwordR } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ where: { usernameR } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(passwordR, user.passwordR);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});





/**
 * @swagger
 * /ap-femije:
 *   post:
 *     summary: Create a new ApFemije entry
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: ApFemije
 *         description: ApFemije object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ApFemije'
 *     responses:
 *       201:
 *         description: Created
 *         schema:
 *           $ref: '#/definitions/ApFemije'
 *       500:
 *         description: Internal Server Error
 *
 *   get:
 *     summary: Get all ApFemije entries
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/ApFemije'
 *       500:
 *         description: Internal Server Error
 *
 * /ap-femije/{id}:
 *   get:
 *     summary: Get a single ApFemije entry by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApFemije entry to retrieve
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/ApFemije'
 *       404:
 *         description: ApFemije not found
 *       500:
 *         description: Internal Server Error
 *
 *   put:
 *     summary: Update a ApFemije entry by ID
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApFemije entry to update
 *         required: true
 *         type: string
 *       - in: body
 *         name: ApFemije
 *         description: Updated ApFemije object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ApFemije'
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/ApFemije'
 *       404:
 *         description: ApFemije not found
 *       500:
 *         description: Internal Server Error
 *
 *   delete:
 *     summary: Delete a ApFemije entry by ID
 *     produces:
 *       - text/plain
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApFemije entry to delete
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: ApFemije deleted
 *       404:
 *         description: ApFemije not found
 *       500:
 *         description: Internal Server Error
 */
app.put('/ap-femije/:id', async (req, res) => {
  const { id } = req.params;
  const {
    firstName, lastName, email, nrPersonal, contact, adresa, nrXhiro, gender,
    aprovoj, che, english, maths, physics, resume, url, selectedOption, about
  } = req.body;

  try {
    const femije = await ApFemije.findByPk(id);
    if (femije) {
      femije.firstName = firstName;
      femije.lastName = lastName;
      femije.email = email;
      femije.nrPersonal = nrPersonal;
      femije.contact = contact;
      femije.adresa = adresa;
      femije.nrXhiro = nrXhiro;
      femije.gender = gender;
      femije.aprovoj = aprovoj;
      femije.che = che;
      femije.english = english;
      femije.maths = maths;
      femije.physics = physics;
      femije.resume = resume;
      femije.url = url;
      femije.selectedOption = selectedOption;
      femije.about = about;

      await femije.save();
      res.status(200).json(femije);
    } else {
      res.status(404).send('ApFemije not found');
    }
  } catch (error) {
    console.error('Failed to update ApFemije entry:', error);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE endpoint to delete a ApFemije entry by ID
app.delete('/ap-femije/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const femije = await ApFemije.findByPk(id);
    if (femije) {
      await femije.destroy();
      res.status(200).send('ApFemije deleted');
    } else {
      res.status(404).send('ApFemije not found');
    }
  } catch (error) {
    console.error('Failed to delete ApFemije entry:', error);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * @swagger
 * /ap-lehonat:
 *   post:
 *     summary: Create a new ApLehonat entry
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: ApLehonat
 *         description: ApLehonat object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ApLehonat'
 *     responses:
 *       201:
 *         description: Created
 *         schema:
 *           $ref: '#/definitions/ApLehonat'
 *       500:
 *         description: Internal Server Error
 *
 *   get:
 *     summary: Get all ApLehonat entries
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/ApLehonat'
 *       500:
 *         description: Internal Server Error
 *
 * /ap-lehonat/{id}:
 *   get:
 *     summary: Get a single ApLehonat entry by ID
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApLehonat entry to retrieve
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/ApLehonat'
 *       404:
 *         description: ApLehonat not found
 *       500:
 *         description: Internal Server Error
 *
 *   put:
 *     summary: Update an ApLehonat entry by ID
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApLehonat entry to update
 *         required: true
 *         type: string
 *       - in: body
 *         name: ApLehonat
 *         description: Updated ApLehonat object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ApLehonat'
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/ApLehonat'
 *       404:
 *         description: ApLehonat not found
 *       500:
 *         description: Internal Server Error
 *
 *   delete:
 *     summary: Delete an ApLehonat entry by ID
 *     produces:
 *       - text/plain
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the ApLehonat entry to delete
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: ApLehonat deleted
 *       404:
 *         description: ApLehonat not found
 *       500:
 *         description: Internal Server Error
 */
app.post('/ap-lehonat', async (req, res) => {
  const {
    firstName, lastName, email, nrPersonal, contact, adresa, nrXhiro, gender,
    isEmployed, aprovoj, english, maths, physics, resume, nationality, about
  } = req.body;

  try {
    const newApLehonat = await ApLehonat.create({
      firstName, lastName, email, nrPersonal, contact, adresa, nrXhiro, gender,
      isEmployed, aprovoj, english, maths, physics, resume, nationality, about
    });
    res.status(201).json(newApLehonat);
  } catch (error) {
    console.error('Failed to create new ApLehonat entry:', error);
    res.status(500).send('Internal Server Error');
  }
});

// GET endpoint to fetch all ApLehonat entries
app.get('/ap-lehonat', async (req, res) => {
  try {
    const lehonatList = await ApLehonat.findAll();
    res.status(200).json(lehonatList);
  } catch (error) {
    console.error('Failed to retrieve ApLehonat entries:', error);
    res.status(500).send('Internal Server Error');
  }
});

// GET endpoint to fetch a single ApLehonat entry by ID
app.get('/ap-lehonat/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const lehonat = await ApLehonat.findByPk(id);
    if (lehonat) {
      res.status(200).json(lehonat);
    } else {
      res.status(404).send('ApLehonat not found');
    }
  } catch (error) {
    console.error('Failed to retrieve ApLehonat entry:', error);
    res.status(500).send('Internal Server Error');
  }
});

// PUT endpoint to update a ApLehonat entry by ID
app.put('/ap-lehonat/:id', async (req, res) => {
  const { id } = req.params;
  const {
    firstName, lastName, email, nrPersonal, contact, adresa, nrXhiro, gender,
    isEmployed, aprovoj, english, maths, physics, resume, nationality, about
  } = req.body;

  try {
    const lehonat = await ApLehonat.findByPk(id);
    if (lehonat) {
      lehonat.firstName = firstName;
      lehonat.lastName = lastName;
      lehonat.email = email;
      lehonat.nrPersonal = nrPersonal;
      lehonat.contact = contact;
      lehonat.adresa = adresa;
      lehonat.nrXhiro = nrXhiro;
      lehonat.gender = gender;
      lehonat.isEmployed = isEmployed;
      lehonat.aprovoj = aprovoj;
      lehonat.english = english;
      lehonat.maths = maths;
      lehonat.physics = physics;
      lehonat.resume = resume;
      lehonat.nationality = nationality;
      lehonat.about = about;

      await lehonat.save();
      res.status(200).json(lehonat);
    } else {
      res.status(404).send('ApLehonat not found');
    }
  } catch (error) {
    console.error('Failed to update ApLehonat entry:', error);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE endpoint to delete a ApLehonat entry by ID
app.delete('/ap-lehonat/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const lehonat = await ApLehonat.findByPk(id);
    if (lehonat) {
      await lehonat.destroy();
      res.status(200).send('ApLehonat deleted');
    } else {
      res.status(404).send('ApLehonat not found');
    }
  } catch (error) {
    console.error('Failed to delete ApLehonat entry:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * @swagger
 * /kru-water-bills:
 *   post:
 *     summary: Create a new Kru water bill
 *     tags: [KruWaterBill]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KruWaterBill'
 *     responses:
 *       201:
 *         description: The Kru water bill was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KruWaterBill'
 *       500:
 *         description: Some server error
 */
app.post('/kru-water-bills', async (req, res) => {
  try {
    const newBill = await KruWaterBill.create(req.body);
    res.status(201).json(newBill);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
/**
 * @swagger
 * /kru-water-bills:
 *   get:
 *     summary: Returns the list of all Kru water bills
 *     tags: [KruWaterBill]
 *     responses:
 *       200:
 *         description: The list of Kru water bills
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/KruWaterBill'
 *       500:
 *         description: Some server error
 */
app.get('/kru-water-bills', async (req, res) => {
  try {
    const bills = await KruWaterBill.findAll();
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
/**
 * @swagger
 * /api/water-bills/{consumerNumber}:
 *   get:
 *     summary: Get the Kru water bill by consumer number
 *     tags: [KruWaterBill]
 *     parameters:
 *       - in: path
 *         name: consumerNumber
 *         schema:
 *           type: string
 *         required: true
 *         description: The consumer number of the Kru water bill
 *     responses:
 *       200:
 *         description: The Kru water bill description by consumer number
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KruWaterBill'
 *       404:
 *         description: The Kru water bill was not found
 *       500:
 *         description: Some server error
 */
app.get('/api/water-bills/:consumerNumber', async (req, res) => {
  try {
    const { consumerNumber } = req.params;
    console.log(`Received request for consumer number: ${consumerNumber}`);
    const bill = await KruWaterBill.findOne({ where: { consumer_number: consumerNumber } });
    console.log(`Query result: ${JSON.stringify(bill)}`);
    if (bill) {
      res.json(bill);
    } else {
      res.status(404).send('Bill not found');
    }
  } catch (error) {
    console.error('Error fetching the bill:', error);
    res.status(500).send('Server error');
  }
});
/**
 * @swagger
 * /kru-water-bills/{id}:
 *   get:
 *     summary: Get the Kru water bill by id
 *     tags: [KruWaterBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kru water bill
 *     responses:
 *       200:
 *         description: The Kru water bill description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KruWaterBill'
 *       404:
 *         description: The Kru water bill was not found
 *       500:
 *         description: Some server error
 */
app.get('/kru-water-bills/:id', async (req, res) => {
  try {
    const bill = await KruWaterBill.findByPk(req.params.id);
    bill ? res.status(200).json(bill) : res.status(404).send('Bill not found');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
/**
 * @swagger
 * /kru-water-bills/{id}:
 *   put:
 *     summary: Update the Kru water bill by id
 *     tags: [KruWaterBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kru water bill
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KruWaterBill'
 *     responses:
 *       200:
 *         description: The Kru water bill was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KruWaterBill'
 *       404:
 *         description: The Kru water bill was not found
 *       500:
 *         description: Some server error
 */
app.put('/kru-water-bills/:id', async (req, res) => {
  try {
    const bill = await KruWaterBill.findByPk(req.params.id);
    if (bill) {
      await bill.update(req.body);
      res.status(200).json(bill);
    } else {
      res.status(404).send('Bill not found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
/**
 * @swagger
 * /kru-water-bills/{id}:
 *   delete:
 *     summary: Remove the Kru water bill by id
 *     tags: [KruWaterBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kru water bill
 *     responses:
 *       200:
 *         description: The Kru water bill was deleted
 *       404:
 *         description: The Kru water bill was not found
 *       500:
 *         description: Some server error
 */
app.delete('/kru-water-bills/:id', async (req, res) => {
  try {
    const bill = await KruWaterBill.findByPk(req.params.id);
    if (bill) {
      await bill.destroy();
      res.status(200).send('Bill deleted');
    } else {
      res.status(404).send('Bill not found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
/**
 * @swagger
 * /kesco-bills:
 *   post:
 *     summary: Create a new Kesco bill
 *     tags: [KescoBill]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KescoBill'
 *     responses:
 *       201:
 *         description: The Kesco bill was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KescoBill'
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * /kesco-bills:
 *   post:
 *     summary: Create a new Kesco bill
 *     tags: [KescoBill]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KescoBill'
 *     responses:
 *       201:
 *         description: The Kesco bill was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KescoBill'
 *       500:
 *         description: Some server error
 */
app.post('/kesco-bills', async (req, res) => {
  try {
    const newBill = await KescoBill.create(req.body);
    res.status(201).json(newBill);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
/**
 * @swagger
 * /kesco-bills/{id}:
 *   get:
 *     summary: Get the Kesco bill by id
 *     tags: [KescoBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kesco bill
 *     responses:
 *       200:
 *         description: The Kesco bill description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KescoBill'
 *       404:
 *         description: The Kesco bill was not found
 *       500:
 *         description: Some server error
 */
app.get('/kesco-bills', async (req, res) => {
  try {
    const bills = await KescoBill.findAll();
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.get('/kesco-bills/:id', async (req, res) => {
  try {
    const bill = await KescoBill.findByPk(req.params.id);
    bill ? res.status(200).json(bill) : res.status(404).send('Bill not found');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
/**
 * @swagger
 * /kesco-bills/{id}:
 *   put:
 *     summary: Update the Kesco bill by id
 *     tags: [KescoBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kesco bill
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KescoBill'
 *     responses:
 *       200:
 *         description: The Kesco bill was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/KescoBill'
 *       404:
 *         description: The Kesco bill was not found
 *       500:
 *         description: Some server error
 */
app.put('/kesco-bills/:id', async (req, res) => {
  try {
    const bill = await KescoBill.findByPk(req.params.id);
    if (bill) {
      await bill.update(req.body);
      res.status(200).json(bill);
    } else {
      res.status(404).send('Bill not found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
/**
 * @swagger
 * /kesco-bills/{id}:
 *   delete:
 *     summary: Remove the Kesco bill by id
 *     tags: [KescoBill]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The id of the Kesco bill
 *     responses:
 *       200:
 *         description: The Kesco bill was deleted
 *       404:
 *         description: The Kesco bill was not found
 *       500:
 *         description: Some server error
 */
app.delete('/kesco-bills/:id', async (req, res) => {
  try {
    const bill = await KescoBill.findByPk(req.params.id);
    if (bill) {
      await bill.destroy();
      res.status(200).send('Bill deleted');
    } else {
      res.status(404).send('Bill not found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.use(cors()); // Enable CORS
app.use(express.json());

// Sync the database and create the tables
sequelize.sync().then(() => {
  console.log('Database & tables created!');
}).catch(error => {
  console.error('Unable to create tables:', error);
});

// Signup route
app.post('/signup', async (req, res) => {
  const { usernameR, passwordR } = req.body;

  if (!usernameR || !passwordR) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Check if username is already taken
    const existingUser = await User.findOne({ where: { usernameR } });
    if (existingUser) {
      return res.status(409).json({ message: 'Username taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(passwordR, 10);

    // Create new user
    const newUser = await User.create({ usernameR, passwordR: hashedPassword });
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { usernameR, passwordR } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ where: { usernameR } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(passwordR, user.passwordR);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
/**
 * @swagger
 * /api/participations:
 *   post:
 *     summary: Save participation data
 *     tags: [Participation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - donationAmount
 *             properties:
 *               donationAmount:
 *                 type: number
 *                 format: float
 *                 description: Amount of donation made by the participant
 *     responses:
 *       201:
 *         description: Participation data saved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the newly created participation record
 *                 donationAmount:
 *                   type: number
 *                   format: float
 *       500:
 *         description: Internal server error occurred while creating participation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 */

app.post('/api/participations', async (req, res) => {
  try {
      const { donationAmount, option } = req.body;
      const participation = await Participation.create({ donationAmount, option });
      res.status(201).json(participation);
  } catch (error) {
      console.error('Error creating participation:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/verifikimi', async (req, res) => {
  try {
      const { ref, selectedOption } = req.body;
      const newVerifikimi = await Verifikimi.create({ ref, selectedOption });
      res.status(201).json(newVerifikimi);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

app.post('/donacioni', async (req, res) => {
  try {
      const { amount, reference } = req.body;
      const donation = await Donation.create({ amount, reference });
      res.status(201).send(donation);
  } catch (error) {
      res.status(400).send(error);
  }
});

// GET /fines - Merr të gjitha gjobat
// router.get('/fines', async (req, res) => {
//   try {
//     const fines = await Fine.findAll();
//     res.json(fines);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// POST /fines - Krijo një gjobë të re
// router.post('/fines', async (req, res) => {
//   const fine = new Fine({
//     fine_amount: req.body.fine_amount,
//     fine_date: req.body.fine_date,
//     paid: req.body.paid,
//     personal_number: req.body.personal_number
//   });

//   try {
//     const newFine = await fine.save();
//     res.status(201).json(newFine);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// PUT /fines/:id - Modifiko një gjobë
// router.put('/fines/:id', async (req, res) => {
//   try {
//     const fine = await Fine.findByPk(req.params.id);
//     if (fine == null) {
//       return res.status(404).json({ message: 'Gjoba nuk u gjet' });
//     }

//     fine.fine_amount = req.body.fine_amount;
//     fine.fine_date = req.body.fine_date;
//     fine.paid = req.body.paid;
//     fine.personal_number = req.body.personal_number;

//     const updatedFine = await fine.save();
//     res.json(updatedFine);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// DELETE /fines/:id - Fshij një gjobë
// router.delete('/fines/:id', async (req, res) => {
//   try {
//     const fine = await Fine.findByPk(req.params.id);
//     if (fine == null) {
//       return res.status(404).json({ message: 'Gjoba nuk u gjet' });
//     }

//     await fine.destroy();
//     res.json({ message: 'Gjoba u fshi' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Endpoint për të krijuar një aplikacion të ri
// app.post('/applications', async (req, res) => {
//   const { name, email, phone } = req.body;

//   try {
//     const newApplication = await Application.create({
//       name: name,
//       email: email,
//       phone: phone
//     });
//     res.status(201).json(newApplication);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Gabim gjatë krijimit të aplikacionit.');
//   }
// });

/**
 * @swagger
 * /requests:
 *   post:
 *     summary: Create a new request
 *     tags: [Requests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - selectedOption1
 *               - selectedOption2
 *               - selectedOption3
 *               - aprovoj
 *             properties:
 *               selectedOption1:
 *                 type: string
 *                 description: First selected option
 *               selectedOption2:
 *                 type: string
 *                 description: Second selected option
 *               selectedOption3:
 *                 type: string
 *                 description: Third selected option
 *               aprovoj:
 *                 type: boolean
 *                 description: Approval status
 *     responses:
 *       201:
 *         description: Request created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 selectedOption1:
 *                   type: string
 *                 selectedOption2:
 *                   type: string
 *                 selectedOption3:
 *                   type: string
 *                 aprovoj:
 *                   type: boolean
 *       500:
 *         description: Error creating the request
 */
app.post('/requests', async (req, res) => {
  const { selectedOption1, selectedOption2, selectedOption3, aprovoj } = req.body;

  try {
    const newRequest = await Request.create({
      selectedOption1,
      selectedOption2,
      selectedOption3,
      aprovoj
    });
    res.status(201).json(newRequest);
  } catch (error) {
    console.error(error);
    res.status(500).send('Gabim gjatë krijimit të kërkesës.');
  }
});


// // Endpoint për të krijuar një kërkesë të re për mjekun familjar
// app.post('/family-doctor-requests', async (req, res) => {
//   const { request_type, health_institution, request_reason, family_doctor, consent } = req.body;

//   try {
//     const newRequest = await FamilyDoctorRequest.create({
//       request_type,
//       health_institution,
//       request_reason,
//       family_doctor,
//       consent
//     });
//     res.status(201).json(newRequest);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Gabim gjatë krijimit të kërkesës për mjekun familjar.');
//   }
// });

/**
 * @swagger
 * /consent:
 *   post:
 *     summary: Save user consent status
 *     tags: [Consent]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - consent
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The user ID
 *               consent:
 *                 type: boolean
 *                 description: The consent status
 *     responses:
 *       200:
 *         description: Consent status saved successfully
 *       400:
 *         description: Invalid request parameters
 */

/**
 * @swagger
 * /consent/{userId}:
 *   get:
 *     summary: Check user consent status
 *     tags: [Consent]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID to retrieve consent status for
 *     responses:
 *       200:
 *         description: Returns the consent status of the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 consent:
 *                   type: boolean
 *       404:
 *         description: Consent status not found for the given user
 */

// Array to store consent status for each user
let consentStatus = {};

// Endpoint to save consent status
app.post('/consent', (req, res) => {
  const { userId, consent } = req.body;
  if (typeof userId !== 'string' || typeof consent !== 'boolean') {
    return res.status(400).send('Invalid request parameters.');
  }
  consentStatus[userId] = consent;
  res.status(200).send('Consent status saved successfully.');
});

// Endpoint to check consent status
app.get('/consent/:userId', (req, res) => {
  const { userId } = req.params;
  const consent = consentStatus[userId];
  if (consent === undefined) {
    res.status(404).send('Consent status not found for the given user.');
  } else {
    res.status(200).json({ consent });
  }
});



/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: Process a payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cardHolderName
 *               - cardNumber
 *               - expiryDate
 *               - cvv
 *             properties:
 *               cardHolderName:
 *                 type: string
 *                 description: Name on the credit/debit card
 *               cardNumber:
 *                 type: string
 *                 description: Credit/debit card number
 *               expiryDate:
 *                 type: string
 *                 format: date
 *                 description: Expiry date of the card (YYYY-MM)
 *               cvv:
 *                 type: string
 *                 description: Card verification value
 *     responses:
 *       201:
 *         description: Payment processed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Payment ID
 *                 cardHolderName:
 *                   type: string
 *                 cardNumber:
 *                   type: string
 *                 expiryDate:
 *                   type: string
 *                   format: date
 *                 cvv:
 *                   type: string
 *       500:
 *         description: Error occurred while processing the payment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message detailing what went wrong
 */
app.post('/api/payments', async (req, res) => {
  try {
    const { cardHolderName, cardNumber, expiryDate, cvv } = req.body;
    const payment = await Payment.create({ cardHolderName, cardNumber, expiryDate, cvv });
    res.status(201).json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the payment' });
  }
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

