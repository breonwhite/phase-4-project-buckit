class SessionsController < ApplicationController
    get "/" do
        { message: "Good luck with your project!" }.to_json
    end
end
