# Phase 4 Project - Buckit/

Buckit is a task management app that allows users to create and save todos that may be on their bucket list. Users can create an account and login to view their bucket list items. 

#### To view application on Render: [https://buckit-app.onrender.com/](https://buckit-app.onrender.com/) 

## Features
As a user, you can
- Create an account
- Log into an existing account
- Log out of an account
- Create, update, and delete Bucket List items
- View all Bucket List items (behind account authentication)

## Requirements
- Ruby 2.7.4
- bundler
- NodeJS (v16), and npm

## Installation
### Backend Setup:
```console
$ git clone git@github.com:breonwhite/phase-4-project-buckit.git
$ cd phase-4-project-buckit 
$ bundle install
```
Then, to seed database
```console
$ rails db:seed
```
Then, to start backend server
```console
$ rails s
```

### Frontend Setup:
```console
$ cd phase-4-project-buckit 
$ cd client
$ npm install
```
Then, to start frontend server
```console
$ npm start
``` 

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgements

- [Rails Guide](https://guides.rubyonrails.org/)
- [Materialized UI](https://mui.com/)
- [Flatiron School, NYC](https://flatironschool.com/campuses/nyc/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169833&utm_content=127574234584&utm_term=flatiron%20school%20nyc&uqaid=513799628636&CjwKCAiA0JKfBhBIEiwAPhZXDxxJlDY_SEahS1QBiubqwPusvGUsfDHmmLAVTuJeLLSGY5b-6OLnqBoCx4kQAvD_BwE&gclid=CjwKCAiA0JKfBhBIEiwAPhZXDxxJlDY_SEahS1QBiubqwPusvGUsfDHmmLAVTuJeLLSGY5b-6OLnqBoCx4kQAvD_BwE)
