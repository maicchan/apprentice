require 'rails_helper'

RSpec.describe "Todos", type: :request do
  describe "GET /todos" do
    it 'HTTP ステータスコード200が返ってくる' do
      get "/todos"
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /todos" do
    it 'HTTP ステータスコード302が返ってくる' do
      post "/todos", params: { todo: { title: "New todo" } }
      expect(response).to have_http_status(:found)
    end
  end
end
