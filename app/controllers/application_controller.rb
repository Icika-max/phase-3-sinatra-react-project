class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  configure do
    enable :sessions
    set :session_secrete, "secret"
  end
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  

  get '/users' do
    users=User.all
    users.to_json
  end
  get '/tasks' do
    tasks=Task.all
    tasks.to_json
  end
  post '/new_user' do
    new_user=User.create(
      name: params[:name],
      email: params[:email],
      # bakery_id: params[:bakery_id]
    )
    new_user.to_json
  end
  patch '/users/:id' do 
    user=User.find(params[:id])
    user.update(
      name: params[:name],
      email: params[:email]
    )
    user.to_json
  end
  patch '/tasks/:id' do 
    task=Task.find(params[:id])
    user.update(
      title: params[:title],
      description: params[:description],
      status: params[:status],
      due_date: params[:due_date]

    )
    task.to_json
  end
  patch '/users/:id' do 
    user=Task.find(params[:id])
    user.update(
      status: params[:status]
    )
    user.to_json
  end
  post '/login' do
   user= User.find_by(email: params[:email])
   if user 
    redirect   "http://localhost:3001/"
  end

end
