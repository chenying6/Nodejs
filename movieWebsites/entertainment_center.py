import fresh_tomatoes
import media

toy_story = media.Movie("Toy Story", 
                        "A story of a boy and his toys that come to life",
                        "http://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
                        "https://www.iqiyi.com/v_19rrifmckv.html")

avatar = media.Movie("Avatar",
                    "A marine on an alier planet",
                    "http://upload.wikimedia.org/wikipedia/id/b/b0/Avatar-Teaser-Poster.jpg",
                    "https://www.iqiyi.com/v_19rrn8vkts.html?vfm=2008_aldbd&fc=828fb30b722f3164&fv=p_02_01")

school_of_rock = media.Movie("School of Rock",
                            "Using rock music to learn",
                            "http://upload.wikimedia.org/wikipedia/en/1/11/School_of_Rock_Poster.jpg",
                            "https://www.iqiyi.com/v_19rrk2xb94.html?vfm=2008_aldbd&fc=828fb30b722f3164&fv=p_02_01")

ratatouille = media.Movie("Ratatouille",
                          "A rat is a chef in Paris",
                          "http://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg",
                          "https://baike.baidu.com/item/%E7%BE%8E%E9%A3%9F%E6%80%BB%E5%8A%A8%E5%91%98/62547?fr=aladdin")

midnight_in_paris = media.Movie("Midnight in Paris",
                                "Going back in time to meet authors",
                                "http://upload.wikimedia.org/wikipedia/en/9/9f/Midnight_in_Paris_Poster.jpg",
                                "https://www.iqiyi.com/v_19rrmx8mf8.html?vfm=2008_aldbd&fc=828fb30b722f3164&fv=p_02_01")
hunger_games = media.Movie("Hunger Games", 
                            "A really real reality show",
                            "http://upload.wikimedia.org/wikipedia/en/4/42/HungerGamesPoster.jpg",
                            "https://www.iqiyi.com/v_19rrk4cczg.html?vfm=2008_aldbd")

movies = [toy_story, avatar, school_of_rock, ratatouille, midnight_in_paris, hunger_games]
#fresh_tomatoes.open_movies_page(movies)
print(media.Movie.__doc__)