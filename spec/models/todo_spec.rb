require 'rails_helper'

RSpec.describe Todo, type: :model do
  it 'タスクのタイトルが入力されていた場合、バリデーションエラーにならない' do
    todo = Todo.new(title: 'Test Todo')
    expect(todo).to be_valid
  end

  it 'タスクのタイトルが空だった場合、バリデーションエラーになる' do
    todo = Todo.new(title: nil)
    expect(todo).to_not be_valid
  end
end
