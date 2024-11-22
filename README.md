# Clean architecture

- Port (Interface) : L'interface **UserRepositoryInterface** définit le contrat pour obtenir les utilisateurs, sans se soucier de la manière dont cela sera réalisé.
  
- Adaptateur (Implémentation) : Un adaptateur comme **UserRepository** implémente concrètement ce port, en fournissant une solution spécifique pour interagir avec une base de données, une API ou d'autres sources de données.


Dans le cadre de l'architecture Clean ou Hexagonale, le rôle d'un port est de définir une interface pour les actions que le système doit pouvoir effectuer. 

L'interface UserRepositoryInterface représente donc un port pour accéder aux utilisateurs. Un adaptateur devra implémenter ce port pour en fournir une solution concrète, qu'il s'agisse d'une base de données, d'un fichier, ou même d'une API externe.