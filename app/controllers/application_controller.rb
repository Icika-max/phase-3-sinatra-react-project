class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  # @api: Enable CORS Headers
  configure do
    enable :cross_origin
  end
  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end
  options "*" do
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end
  # @api: Format the json response
  def json_response(code: 200, data: nil)
    status = [200, 201].include?(code) ? "SUCCESS" : "FAILED"
    headers['Content-Type'] = 'application/json'
    if data
      [ code, { data: data, message: status }.to_json ]
    end
  end
  # @views: Format the erb responses
  def erb_response(file)
    headers['Content-Type'] = 'text/html'
    erb file
  end
  # @helper: not found error formatter
  def not_found_response
    json_response(code: 404, data: { error: "You seem lost. That route does not exist." })
  end
  # @api: 404 handler
  not_found do
    not_found_response
  end

  

  get '/users' do
    users=User.all
    json_response(data: users)
  end
  get '/tasks' do
    tasks=Task.all
    json_response(data: tasks)
  end
  # get '/tasks/:id' do
  #   task = Task.find(params[:id])
  #   if task.user.email == session[:user]
  #     erb :task
  #   else
  #     'Task not found'
  #   end
  # end
  

  post '/new_user' do
    new_user=User.create(
      name: params[:name],
      email: params[:email],
      password: params[:password]
     
    )
    json_response(data: new_user)
  end
  post '/new_task' do
    new_task=Task.create(
      title: params[:title],
      description: params[:description],
      due_date: params[:due_date],
      status: params[:status]
    )
    json_response(data: new_task)
  end
  patch '/users/:id' do 
    user=User.find(params[:id])
    user.update(
      name: params[:name],
      email: params[:email],
      password: params[:email]
    )
    json_response(data: user)
  end
  patch '/tasks/:id' do 
    task=Task.find(params[:id])
    user.update(
      title: params[:title],
      description: params[:description],
      status: params[:status],
      due_date: params[:due_date]

    )
    json_response(data: task)
  end
  patch '/users/:id' do 
    user=Task.find(params[:id])
    user.update(
      status: params[:status]
    )
    json_response(data: user)
  end
  post '/login' do
    user= User.find_by(email: params[:email])
    if user 
     redirect   "http://localhost:3001/"
    end
  
  end
  # delete '/tasks/:id' do
  #   # find the task using the ID
  #   task = Task.find(params[:id])
  #   # delete the task
  #   task.destroy
  #   # send a response with the deleted task as JSON
  #   task.to_json
  # end


end
