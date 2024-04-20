package oslomet.oblig2_1700;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class kinoController {
    private List<kinobilett> biletter = new ArrayList<>();
    @PostMapping("/lagreBilett")
    public void lagre (kinobilett bilett){
        biletter.add(bilett);
    }
    @GetMapping("/hentBilett")
    public List<kinobilett> retur (){
        return biletter;
    }
    @GetMapping("/slettAlle")
    public void slettalle(){
        biletter.clear();
    }





}
