import React from "react";
import "./ViewProfile.css";

function ViewProfile(props) {

    const { animalID, animalName, animalSpecies, animalGeneralAge, animalSex, animalBreed, animalDescriptionPlain, fosterReason,
        animalHouseTrained,
        interactWithChildren,
        interactWithPets,
        interactionComments,
        initialReaction,
        greetingReaction,
        pettingReaction,
        playReaction,
        holdingReaction,
        animalOKWithKids,
        animalOKWithAdults,
        animalOKForSeniors,
        animalOKWithCats,
        animalOKWithDogs } = props;

    return (
        <div className="col-md-12">
                <h3>Foster info</h3>
                <div className="col-md-6">
                    <p>Name: {animalName}<br/>
                    Species: {animalSpecies}<br/>
                    Age: {animalGeneralAge}<br/>
                    Foster Reason:{fosterReason}
                    </p>
                </div>
                <div className="col-md-6">
                    <p>Animal ID: {animalID}<br/>
                    Gender: {animalSex}<br/>
                    Breed: {animalBreed}</p>
                </div>

                {/* <div className="col-md-12">
                    <h3>Update details about your foster</h3>
                    <div className="form-check form-check-inline">
                        <p>Is the animal house trained/litter box trained?</p>
                        <br/>
                        <label className="form-check-label">Yes</label>
                        <input name="animalHouseTrained" type="radio" className="form-check-input" value="Yes" onChange={handleChange} />

                        <label className="form-check-label">No</label>
                        <input name="animalHouseTrained" type="radio" className="form-check-input" value="No" onChange={handleChange} />
                    </div>
                    <div className="form-check form-check-inline">
                        <p>Has the animal interacted with children?</p>
                        <br/> 
                        <label className="form-check-label">Yes</label>
                        <input name="interactWithChildren" type="radio" className="form-check-input" value="Yes" onChange={handleChange} />

                        <label className="form-check-label">No</label>
                        <input name="interactWithChildren" type="radio" className="form-check-input" value="No" onChange={handleChange} />
                    </div>
                    <div className="form-check form-check-inline">
                        <p>Has the animal interacted with other pets?</p>
                        <br/>
                        <label className="form-check-label">Yes</label>
                        <input name="interactWithPets" type="radio" className="form-check-input" value="Yes" onChange={handleChange} />

                        <label className="form-check-label">No</label>
                        <input name="interactWithPets" type="radio" className="form-check-input" value="No" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <p>Other interaction comments:</p>
                        <label htmlFor="interactionComments">Comments</label> <br />
                        <input name="interactionComments" type="text" rows="3" className="form-check-input" onChange={handleChange} />
                    </div>

                    <p><strong>Notice!</strong> Please fill out the below sections after the animal has been in the home for at least 3 days.</p>
                    <div className="form-group">
                        <p>When you first brought the animal home he/she:</p>
                        <p>
                            <label htmlFor="initialReaction">
                                <input type="checkbox" name="initialReaction" className="form-check-input" value="Explored the environment with a tall body posture." onChange={handleChange} />
                                <span>Explored the environment with a tall body posture.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="initialReaction">
                                <input type="checkbox" name="initialReaction" className="form-check-input" value="Explored the environment with a crouched body posture." onChange={handleChange} />
                                <span>Explored the environment with a crouched body posture.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="initialReaction">
                                <input type="checkbox" name="initialReaction" className="form-check-input" value="Initially found a place to hide but came out later to explore." onChange={handleChange} />
                                <span>Initially found a place to hide but came out later to explore.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="initialReaction">
                                <input type="checkbox" name="initialReaction" className="form-check-input" value="Quickly found a place to hide and remained there." onChange={handleChange} />
                                <span>Quickly found a place to hide and remained there.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>When greeting or approaching the animal they:</p>
                        <p>
                            <label htmlFor="greetingReaction">
                            <input type="checkbox" name="greetingReaction" className="form-check-input" value="Does not approach." onChange={handleChange} />
                                <span>Solicits attention by rubbing etc.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="greetingReaction">
                                <input type="checkbox" name="greetingReaction" className="form-check-input" value="Does not approach." onChange={handleChange} />
                                <span>Does not approach.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="greetingReaction">
                                <input type="checkbox" name="greetingReaction" className="form-check-input" value="Retreats or attempts to hide." onChange={handleChange} />
                                <span>Retreats or attempts to hide.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="greetingReaction">
                                <input type="checkbox" name="greetingReaction" className="form-check-input" value="Does not approach but meows, wags tail, or blinks." onChange={handleChange} />
                                <span>Does not approach but meows, wags tail, or blinks.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="greetingReaction">
                                <input type="checkbox" name="greetingReaction" className="form-check-input" value="Charges towards you." onChange={handleChange} />
                                <span>Charges towards you.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="greetingReaction">
                                <input type="checkbox" name="greetingReaction" className="form-check-input" value="Hisses or growls." onChange={handleChange} />
                                <span>Hisses or growls.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>When petting the animal he/she (please mark all that apply):</p>
                        <p>
                            <label htmlFor="pettingReaction">
                                <input type="checkbox" name="pettingReaction" className="form-check-input" value="Rubs against legs or hand." onChange={handleChange} />
                                <span>Rubs against legs or hand.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction">
                                <input type="checkbox" name="pettingReaction" className="form-check-input" value="Sniffs or head-butts your hand." onChange={handleChange} />
                                <span>Sniffs or head-butts your hand.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction">
                                <input type="checkbox" name="pettingReaction" className="form-check-input" value="Rolls on back or rolls over." onChange={handleChange} />
                                <span>Rolls on back or rolls over.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction">
                                <input type="checkbox" name="pettingReaction" className="form-check-input" value="Avoids petting or is tense when petted." onChange={handleChange} />
                                <span>Avoids petting or is tense when petted.</span>
                            </label>
                        </p>
                        </div>
                        <p>
                            <label htmlFor="pettingReaction">
                                <input type="checkbox" name="pettingReaction" className="form-check-input" value="Swat or attempts to swat hand." onChange={handleChange} />
                                <span>Swat or attempts to swat hand.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction">
                                <input type="checkbox" name="pettingReaction" className="form-check-input" value="Meows, purrs, or barks." onChange={handleChange} />
                                <span>Meows, purrs, or barks.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction">
                                <input type="checkbox" name="pettingReaction" className="form-check-input" value="Shows initial fear but then relaxes." onChange={handleChange} />
                                <span>Shows initial fear but then relaxes.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction">
                                <input type="checkbox" name="pettingReaction" className="form-check-input" value="Hisses or growls." onChange={handleChange} />
                                <span>Hisses or growls.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="pettingReaction">
                                <input type="checkbox" name="pettingReaction" className="form-check-input" value="Bites or attempts to bite hand." onChange={handleChange} />
                                <span>Bites or attempts to bite hand.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>When engaging in play the animal (please mark all that apply):</p>
                        <p>
                            <label htmlFor="playReaction">
                                <input type="checkbox" name="playReaction" className="form-check-input" value="Eagerly chases toy and engages in play." onChange={handleChange} />
                                <span>Eagerly chases toy and engages in play.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="playReaction">
                                <input type="checkbox" name="playReaction" className="form-check-input" value="Ignores the toy and avoids contact with you." onChange={handleChange} />
                                <span>Ignores the toy and avoids contact with you.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="playReaction">
                                <input type="checkbox" name="playReaction" className="form-check-input" value="Ignores toys and attends to something else." onChange={handleChange} />
                                <span>Ignores toys and attends to something else.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="playReaction">
                                <input type="checkbox" name="playReaction" className="form-check-input" value="Watches the toy intently but does not engage in play." onChange={handleChange} />
                                <span>Watches the toy intently but does not engage in play.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="playReaction">
                                <input type="checkbox" name="playReaction" className="form-check-input" value="Ignores toys but comes to you for petting/attention." onChange={handleChange} />
                                <span>Ignores toys but comes to you for petting/attention.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>When picked up and held he/she (please mark all that apply):</p>
                        <p>
                            <label htmlFor="holdingReaction">
                                <input type="checkbox" name="holdingReaction" className="form-check-input" value="Meows, purrs, or licks when held." onChange={handleChange} />
                                <span>Meows, purrs, or licks when held.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction">
                                <input type="checkbox" name="holdingReaction" className="form-check-input" value="Accepts the hold but is a little tense." onChange={handleChange} />
                                <span>Accepts the hold but is a little tense.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction">
                                <input type="checkbox" name="holdingReaction" className="form-check-input" value="Struggles to escape." onChange={handleChange} />
                                <span>Struggles to escape.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction">
                                <input type="checkbox" name="holdingReaction" className="form-check-input" value="Struggles to escape." onChange={handleChange} />
                                <span>Struggles to escape.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction">
                                <input type="checkbox" name="holdingReaction" className="form-check-input" value="Extends a paw to your neck/shoulder in a kind manner." onChange={handleChange} />
                                <span>Extends a paw to your neck/shoulder in a kind manner.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction">
                                <input type="checkbox" name="holdingReaction" className="form-check-input" value="Stiffens, very uncomfortable when held." onChange={handleChange} />
                                <span>Stiffens, very uncomfortable when held.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction">
                                <input type="checkbox" name="holdingReaction" className="form-check-input" value="Hisses or growls." onChange={handleChange} />
                                <span>Hisses or growls.</span>
                            </label>
                        </p>
                        <p>
                            <label htmlFor="holdingReaction">
                                <input type="checkbox" name="holdingReaction" className="form-check-input" value="Bites or attempts to bite." onChange={handleChange} />
                                <span>Bites or attempts to bite.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>In your opinion, which home setting would this animal be suited for? (Check all that apply)</p>
                        <p>
                            <label htmlFor="animalOKWithKids">
                                <input type="checkbox" name="animalOKWithKids" className="form-check-input" value="Yes" onChange={handleChange} />
                                <span>A family with children.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>
                            <label htmlFor="animalOKWithAdults">
                                <input type="checkbox" name="animalOKWithAdults" className="form-check-input" value="Yes" onChange={handleChange} />
                                <span>Adults only.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>
                            <label htmlFor="animalOKForSeniors">
                                <input type="checkbox" name="animalOKForSeniors" className="form-check-input" value="Yes" onChange={handleChange} />
                                <span>Seniors.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>
                            <label htmlFor="animalOKWithCats">
                                <input type="checkbox" name="animalOKWithCats" className="form-check-input" value="Yes" onChange={handleChange} />
                                <span>A home with other cats.</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <p>
                            <label htmlFor="animalOKWithDogs">
                                <input type="checkbox" name="animalOKWithDogs" className="form-check-input" value="Yes" onChange={handleChange} />
                                <span>A home with other dogs.</span>
                            </label>
                        </p>
                    </div> */}
                    <div>
                      <p>Animal description: {animalDescriptionPlain}</p>
                    </div>
        </div>
    )
}

export default ViewProfile;
