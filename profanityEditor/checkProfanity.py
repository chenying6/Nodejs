import urllib.request as rq
def read_text():
    quotes = open('F:\\FullStack\\Nodejs\\profanityEditor\\movie_quotes.txt')
    content_of_file=quotes.read()
    print(content_of_file)
    quotes.close()
    check_profanity(content_of_file)
    

def check_profanity(text_to_check):
    connection = rq.urlopen("http://www.baidu.com")
    output = connection.read()
    print(output)
    connection.close()

read_text()
        
