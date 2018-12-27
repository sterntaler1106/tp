package com.example.beerbackend.beer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Component;

@RepositoryRestResource
interface BeerRepository extends JpaRepository<Beer, Long> {}
