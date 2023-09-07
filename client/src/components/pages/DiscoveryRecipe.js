import { MessagesSquare, Search, ThumbsUp } from "lucide-react";
import React, { useEffect } from "react";
import Noodles from "../../assets/noodles_bowl.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipeAction } from "../../redux/actions/recipeAction";

const DiscoveryRecipe = () => {
  const dispatch = useDispatch();

  /** Fetching all Recipes from server */
  const recipeData = useSelector((state) => state.getAllRecipeStore.allRecipe);
  // const recipeLoading = useSelector((state) => state.getAllRecipeStore.loading);
  useEffect(() => {
    dispatch(getAllRecipeAction());
  }, [dispatch]);

  // console.log(recipeData, recipeLoading);
  return (
    <div className="text-lg flex flex-col gap-2 p-5">
      <h1 className="text-5xl text-orange-500 font-bold text-center">
        Discover Delicious Recipes!
      </h1>
      <p className="text-center px-10">
        Welcome to the Discovery Page, your gateway to a world of culinary
        inspiration. Whether you're an experienced chef or a passionate home
        cook, this is where you'll find exciting new recipes to tantalize your
        taste buds.
      </p>
      <div className="flex border-2 border-orange-500 rounded-3xl ps-10 overflow-hidden mx-[10%]">
        <input
          type="text"
          placeholder="Let Search The Recipe..."
          className="focus:outline-none w-full p-2"
        />
        <button className="bg-orange-500 w-[5rem] text-white flex justify-center items-center ">
          <Search size={30} />
        </button>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <img
              src={Noodles}
              alt="Welcome"
              className="rounded-full object-cover h-[8rem] w-[8rem]"
            />
            <span>Breakfast</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Noodles}
              alt="Welcome"
              className="rounded-full object-cover h-[8rem] w-[8rem]"
            />
            <span>Lunch</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Noodles}
              alt="Welcome"
              className="rounded-full object-cover h-[8rem] w-[8rem]"
            />
            <span>Dinner</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Noodles}
              alt="Welcome"
              className="rounded-full object-cover h-[8rem] w-[8rem]"
            />
            <span>Dessert</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Noodles}
              alt="Welcome"
              className="rounded-full object-cover h-[8rem] w-[8rem]"
            />
            <span>Drink</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Noodles}
              alt="Welcome"
              className="rounded-full object-cover h-[8rem] w-[8rem]"
            />
            <span>Snack</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Noodles}
              alt="Welcome"
              className="rounded-full object-cover h-[8rem] w-[8rem]"
            />
            <span>Ice Cream</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Noodles}
              alt="Welcome"
              className="rounded-full object-cover h-[8rem] w-[8rem]"
            />
            <span>More</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-10">
        <div className="w-[80%] grid grid-cols-3 gap-5  ">
          {recipeData &&
            recipeData.map((recipe, i) => (
              <div
                key={i}
                className="group relative flex flex-row rounded-xl w-[20rem] pt-[5rem]"
              >
                <div className="absolute top-0 left-[5rem] border-2 border-orange-500 bg-white h-[10rem] w-[10rem] rounded-full transform group-hover:rotate-180 transition-transform duration-1000">
                  <img
                    src={Noodles}
                    alt="Welcome"
                    className="h-full w-full rounded-full"
                  />
                </div>
                <div className="border-2 border-orange-500 w-full rounded-xl pt-[5rem] flex flex-col items-center gap-2 p-2">
                  <div className="text-xl font-bold">{recipe.title}</div>
                  <div className="text-sm text-center">
                    {recipe.introduction}
                  </div>
                  <div className="flex gap-2 text-sm font-bold">
                    Type:
                    <span className="border-2 border-green-500 p-1">
                      <div className="rounded-full h-3 w-3 bg-green-500" />
                    </span>
                  </div>
                  <div className="flex gap-2 text-sm font-bold">
                    Preperation Time:
                    <span className="text-orange-500">
                      {recipe.cookingTime}
                    </span>
                  </div>
                  <div className="flex justify-between px-10 w-full">
                    <div className="flex gap-2">
                      {recipe.likes}
                      <ThumbsUp />
                    </div>
                    <div className="flex gap-2">
                      {recipe.comments.length}
                      <MessagesSquare />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {/* <div className="group relative flex flex-row rounded-xl w-[20rem] pt-[5rem]">
            <div className="absolute top-0 left-[5rem] border-2 border-orange-500 bg-white h-[10rem] w-[10rem] rounded-full transform group-hover:rotate-180 transition-transform duration-1000">
              <img
                src={Noodles}
                alt="Welcome"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="border-2 border-orange-500 w-full rounded-xl pt-[5rem] flex flex-col items-center gap-2 p-2">
              <div className="text-xl font-bold">Header</div>
              <div className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti beatae nam, maiores aspernatur, magni distinctio
                accusamus possimus esse id quo ad? Mollitia, debitis quae
                maiores doloremque est excepturi nostrum dolorem.
              </div>
            </div>
          </div>
          <div className="group relative flex flex-row rounded-xl w-[20rem] pt-[5rem]">
            <div className="absolute top-0 left-[5rem] border-2 border-orange-500 bg-white h-[10rem] w-[10rem] rounded-full transform group-hover:rotate-180 transition-transform duration-1000">
              <img
                src={Noodles}
                alt="Welcome"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="border-2 border-orange-500 w-full rounded-xl pt-[5rem] flex flex-col items-center gap-2 p-2">
              <div className="text-xl font-bold">Header</div>
              <div className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti beatae nam, maiores aspernatur, magni distinctio
                accusamus possimus esse id quo ad? Mollitia, debitis quae
                maiores doloremque est excepturi nostrum dolorem.
              </div>
            </div>
          </div>
          <div className="group relative flex flex-row rounded-xl w-[20rem] pt-[5rem]">
            <div className="absolute top-0 left-[5rem] border-2 border-orange-500 bg-white h-[10rem] w-[10rem] rounded-full transform group-hover:rotate-180 transition-transform duration-1000">
              <img
                src={Noodles}
                alt="Welcome"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="border-2 border-orange-500 w-full rounded-xl pt-[5rem] flex flex-col items-center gap-2 p-2">
              <div className="text-xl font-bold">Header</div>
              <div className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti beatae nam, maiores aspernatur, magni distinctio
                accusamus possimus esse id quo ad? Mollitia, debitis quae
                maiores doloremque est excepturi nostrum dolorem.
              </div>
            </div>
          </div>
          <div className="group relative flex flex-row rounded-xl w-[20rem] pt-[5rem]">
            <div className="absolute top-0 left-[5rem] border-2 border-orange-500 bg-white h-[10rem] w-[10rem] rounded-full transform group-hover:rotate-180 transition-transform duration-1000">
              <img
                src={Noodles}
                alt="Welcome"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="border-2 border-orange-500 w-full rounded-xl pt-[5rem] flex flex-col items-center gap-2 p-2">
              <div className="text-xl font-bold">Header</div>
              <div className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti beatae nam, maiores aspernatur, magni distinctio
                accusamus possimus esse id quo ad? Mollitia, debitis quae
                maiores doloremque est excepturi nostrum dolorem.
              </div>
            </div>
          </div>
          <div className="group relative flex flex-row rounded-xl w-[20rem] pt-[5rem]">
            <div className="absolute top-0 left-[5rem] border-2 border-orange-500 bg-white h-[10rem] w-[10rem] rounded-full transform group-hover:rotate-180 transition-transform duration-1000">
              <img
                src={Noodles}
                alt="Welcome"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="border-2 border-orange-500 w-full rounded-xl pt-[5rem] flex flex-col items-center gap-2 p-2">
              <div className="text-xl font-bold">Header</div>
              <div className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti beatae nam, maiores aspernatur, magni distinctio
                accusamus possimus esse id quo ad? Mollitia, debitis quae
                maiores doloremque est excepturi nostrum dolorem.
              </div>
            </div>
          </div>
          <div className="group relative flex flex-row rounded-xl w-[20rem] pt-[5rem]">
            <div className="absolute top-0 left-[5rem] border-2 border-orange-500 bg-white h-[10rem] w-[10rem] rounded-full transform group-hover:rotate-180 transition-transform duration-1000">
              <img
                src={Noodles}
                alt="Welcome"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="border-2 border-orange-500 w-full rounded-xl pt-[5rem] flex flex-col items-center gap-2 p-2">
              <div className="text-xl font-bold">Header</div>
              <div className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti beatae nam, maiores aspernatur, magni distinctio
                accusamus possimus esse id quo ad? Mollitia, debitis quae
                maiores doloremque est excepturi nostrum dolorem.
              </div>
            </div>
          </div>
          <div className="group relative flex flex-row rounded-xl w-[20rem] pt-[5rem]">
            <div className="absolute top-0 left-[5rem] border-2 border-orange-500 bg-white h-[10rem] w-[10rem] rounded-full transform group-hover:rotate-180 transition-transform duration-1000">
              <img
                src={Noodles}
                alt="Welcome"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="border-2 border-orange-500 w-full rounded-xl pt-[5rem] flex flex-col items-center gap-2 p-2">
              <div className="text-xl font-bold">Header</div>
              <div className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti beatae nam, maiores aspernatur, magni distinctio
                accusamus possimus esse id quo ad? Mollitia, debitis quae
                maiores doloremque est excepturi nostrum dolorem.
              </div>
            </div>
          </div>
          <div className="group relative flex flex-row rounded-xl w-[20rem] pt-[5rem]">
            <div className="absolute top-0 left-[5rem] border-2 border-orange-500 bg-white h-[10rem] w-[10rem] rounded-full transform group-hover:rotate-180 transition-transform duration-1000">
              <img
                src={Noodles}
                alt="Welcome"
                className="h-full w-full rounded-full"
              />
            </div>
            <div className="border-2 border-orange-500 w-full rounded-xl pt-[5rem] flex flex-col items-center gap-2 p-2">
              <div className="text-xl font-bold">Header</div>
              <div className="text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti beatae nam, maiores aspernatur, magni distinctio
                accusamus possimus esse id quo ad? Mollitia, debitis quae
                maiores doloremque est excepturi nostrum dolorem.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DiscoveryRecipe;
