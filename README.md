# TP3

**ATTENTION la correction a été faite en Angular 16, il y a donc les fichiers `app.module.ts` et `app-routing.module.ts`**

## Sujet

1. Transformer la méthode `addBook(book: Book): void` du `BookService` pour gérer les doublons
2. Mettre en place un composant `book-detail` qui récupèrera l'id du livre via l'URL
3. Mettre en place le routing qui va gérer les routes suivantes :
    - / => affichage de la page d'accueil vide
    - /books => affichage de la liste des livres
    - /book/:id => affichage du détail du livre passé en paramètre (lien à afficher dans la liste)
    - /book/add => affichage du formulaire d'ajout d'un livre
4. En plus du stub, charger la liste des livres via l'URL suivante : [https://664ba07f35bbda10987d9f99.mockapi.io/api/books](https://66e8848bb17821a9d9dcf68c.mockapi.io/books)
5. A la validation du formulaire, faire un ajout via l'API précédente.

## Correction

1. Récupération d'un Book een cherchant par ID via la la méthod `Array.find`
2. La récupération de l'ID dans l'URL se fait via `this.activatedRoute.snapshot.params['id'];`
3. Le routing est à détailler dans le fichier `app-routing.module.ts`
4. En angular < 16, le provider `HttpClientModule` doit être inclus dans la section `imports` du fichier `app.module.ts`
5. Utilisation de la méthode `HttpClient.post<Book>(this.bookApiUrl, book)`
6. BONUS : gérer les routes malformées/fausses (erreur ou redirection)

## Annexes

1. https://angular.dev/guide/routing/common-router-tasks
2. https://docs.angular.lat/guide/http
