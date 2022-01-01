## Wireframe the general layout of the app

## Plan for the scoretracker API
- make a db with players table
- id, name, score and date and time
- id is primary serial key
- name is user input 
- score comes from the app (how many responses taken to get the desirable ending)
- date also from the app

## The game
- Three chapters + the intro (the saloon, the sheriff office and R.I.P or Sunset Rider)

Intro -> Ride to Nottingham -> next -> Saloon 
3 choices -> redhead / bar / my-man
- redhead ( 2 choices) -> saloon / dead
- bar (2 choices ) -> saloon / dead
- my-man ( 4 choices(random) ) -> sheriff / dead

Sheriff office ( 2 choices) -> bribe / distract
bribe -> dead
distract -> Sunset rider

# mark-up class and id names to keep it consistant

nav - all good
main 
> section.intro
  > article.set-up > p.prologue + form > btn.start-btn
  > article.ride > figure > img.ride-img  
                  > h2#welcome + p.ride-intro
                  > btn.next-btn            
> section.chapter1
  > article.p1 > figure > img.saloon-img + p.saloon
               > div.p1-buttons > btn.p1-btn-1 +
                                  btn.p1-btn-2 +
                                  btn.p1-btn-3 
  > article.redhead > div.redhead-intro > p + btn.redhead-yes
                                        + btn.redhead-no
                    > div.redhead-end > p
  > article.bar > div.bar-into > p + btn.another-drink
                              + btn.save-boris
  > aritcle.my-man > div.my-man-intro + div.btn-group > btn.spades +
                                                    + btn.clubs
                                                    + btn.diamonds
                                                    + btn.hearts
                  > div.my-man-next > p + p + btn.saloon-end-btn

> section.chapter2
  > article.sheriff > div.sheriff-intro > p + div.dep-btns > btn.bribe
                                              + btn.distract
                    > div.sheriff-end > p
  > article.get-boris > p + btn.btn-final

> section.epilogue
  > article.sunset > h3 + figure + p + btn.replay-btn