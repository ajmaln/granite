# frozen_string_literal: true

class TasksController < ApplicationController
  def index
    tasks = Task.all
    render status: :ok, json: { tasks: tasks }
  end

  def create
    task = Task.new(task_params)
    if task.save
      render status: :ok, json: { notice: t("successfully_created") }
    else
      errors = task.errors.full_messages.to_sentence
      render status: :unprocessable_entity, json: { error: errors }
    end
  end

  def show
    task = Task.find_by(slug: params[:slug])
    if task
      render status: :ok, json: { task: task }
    else
      render status: :not_found, json: { error: t("task.not_found") }
    end
  end

  private

    def task_params
      params.require(:task).permit(:title)
    end
end
