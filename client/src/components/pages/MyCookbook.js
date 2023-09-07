import {
  Calendar,
  Image,
  LayoutDashboard,
  MessageCircle,
  Tag,
  ThumbsUp,
  Timer,
} from "lucide-react";
import React from "react";

const MyCookbook = () => {
  return (
    <div className="container">
      <div className="text-lg flex flex-col gap-2 p-5">
        <h1 className="text-5xl text-orange-500 font-bold text-center">
          Welcome to Your Cookbook!
        </h1>
        <p className="text-center px-10">
          Your Cookbook is your culinary haven where you can manage and organize
          all your saved recipes in one place. It's your personal collection of
          delicious creations waiting to be explored and enjoyed.
        </p>
        <div className="flex flex-col justify-center w-full items-center">
          <div className="grid grid-cols-7 w-[90%] bg-black text-white p-2 rounded-t-xl">
            <div className="flex justify-center gap-2">
              <Image />
              Image
            </div>
            <div className="flex justify-center gap-2">
              <Tag />
              Title
            </div>
            <div className="flex justify-center gap-2">
              <Calendar />
              Publish Date
            </div>
            <div className="flex justify-center gap-2">
              <LayoutDashboard />
              Category
            </div>
            <div className="flex justify-center gap-2">
              <Timer />
              Cooking Time
            </div>
            <div className="flex justify-center gap-2">
              <ThumbsUp />
              Likes
            </div>
            <div className="flex justify-center gap-2">
              <MessageCircle />
              Comments
            </div>
          </div>
          <div className="grid grid-cols-7 w-[90%]">
            <div className="">1</div>
            <div className="">2</div>
            <div className="">3</div>
            <div className="">4</div>
            <div className="">5</div>
            <div className="">6</div>
            <div className="">7</div>
            <div className="">8</div>
            <div className="">9</div>
            <div className="">10</div>
            <div className="">11</div>
            <div className="">12</div>
            <div className="">13</div>
            <div className="">14</div>
            <div className="">15</div>
            <div className="">16</div>
            <div className="">17</div>
            <div className="">18</div>
            <div className="">19</div>
            <div className="">20</div>
            <div className="">21</div>
            <div className="">22</div>
            <div className="">23</div>
            <div className="">24</div>
            <div className="">25</div>
            <div className="">26</div>
            <div className="">27</div>
            <div className="">28</div>
            <div className="">29</div>
            <div className="">30</div>
            <div className="">31</div>
            <div className="">32</div>
            <div className="">33</div>
            <div className="">34</div>
            <div className="">35</div>
            <div className="">36</div>
            <div className="">37</div>
            <div className="">38</div>
            <div className="">39</div>
            <div className="">40</div>
            <div className="">41</div>
            <div className="">42</div>
            <div className="">43</div>
            <div className="">44</div>
            <div className="">45</div>
            <div className="">46</div>
            <div className="">47</div>
            <div className="">48</div>
            <div className="">49</div>
            <div className="">50</div>
            <div className="">51</div>
            <div className="">52</div>
            <div className="">53</div>
            <div className="">54</div>
            <div className="">55</div>
            <div className="">56</div>
            <div className="">57</div>
            <div className="">58</div>
            <div className="">59</div>
            <div className="">60</div>
            <div className="">61</div>
            <div className="">62</div>
            <div className="">63</div>
            <div className="">64</div>
            <div className="">65</div>
            <div className="">66</div>
            <div className="">67</div>
            <div className="">68</div>
            <div className="">69</div>
            <div className="">70</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCookbook;
