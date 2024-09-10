# NovaStore

This is a ecommerce website that uses data from DummyJSON API. This was built using React with TypeScript and TailwindCSS for styling and responsiveness.
## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Features](#features)
- [What I Learnt](#whatilearnt)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This is a ecommerce store that displays products using the data from DummyJSON API which is great resource to showcase frontend development. 
I enjoy building the project as it really helped me to understand the importance of using Typescript and really understand the data that I am 
using in my project.

## Technologies

- **Frontend**: React, TypScript, TailwindCSS, Component Library: DaisyUI
- **Backend**: DummyJSON API/Custom hooks/ types to define the data
- **APIs**: Dummy JSON API
- **Version Control**: Git, GitHub

## Features

- Able to go to ProductList and see all available project 
- Display detailed information about each figure, including their biography, achievements, and historical significance.
- User-friendly interface with easy navigation.
- Integration with the Historical Figures API and the Wiki API for accurate and up-to-date information.

## What I learnt
- Defining data in types when fetching data from API:
I had to define the data that I fetched from the API in seperate file. This made it easier to deal when building my components as I could use Products.d.ts in my component to define the data I was using and avoid errors.

- Using lib to store fetching the data and then further using that in custom hook (useProduct).

- Responsiveness in TailwindCSS
## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/historical-figures.git
    cd historical-figures
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```



3. **Start the development server**:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Click on Explore or Shop to see all products
3. Use the Category select to toggle between different types of products depending on 
4. You can add products to the cart and delete from the cart.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
