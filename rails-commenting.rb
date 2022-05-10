# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController 
  # The blog post controller is where you handle the route request within rails. 'BlogPost' is the generated controller name for this app, so 'BlogPost' will be the name used to call to the controller
  def index
    # ---2)
    @posts = BlogPost.all
    #  '@post' is the model that was generated for this application. The BlogPost.all will show all of the primary id's in the database, along with the data inside them. 
  end

  # ---3)
  def show
    #  Show is the controller method for the application to read the data. It'll provide the data that it is defined within the method.
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  def new
    #  New is the controller method for creating a new instance of data for rails. In this case it's creating a new instance of @post.
    @post = BlogPost.new
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    #  BlogPost.create is similar to the 'new' controller method, except for this command it's creating information to the database for the user to see
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id])
    #  BlogPost.find(params[:id]) is locating a specfic primary id withing the @post instance.
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    #  @post.update allows for the developer to updated information to the database for either all the id's or just one specific id.
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      redirect_to blog_post_path(@post)
      #  This command is making blog_post_path redirect to the whole @post instance instead of the one path.
    end
  end

  # ---9)
  private
  #  This method hides commands from the user of the application and is accessible inside of the code.
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
    # .require forces the params to contain certain values in a certain order which is determined when creating the model, and the (:blog_post).permit acts as a filter to ensure that the keys have values assigned to them. 
  end
end
